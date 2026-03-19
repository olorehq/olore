# Kafka

This guide demonstrates how to plug Mixpanel into an event collection pipeline by AWS Kafka. Once set up, your events will route to Mixpanel and be available in real-time for analytics. This approach is serverless and open-source, and takes ~5 minutes to set up.

To read messages from a Kafka topic and send them to Mixpanel, you'll need to use the confluent-kafka library for Kafka and the mixpanel library for Mixpanel.

### Here's a sample Python code snippet:

```python main.py
from confluent_kafka import Consumer, KafkaError
from mixpanel import Mixpanel

# Kafka setup
kafka_config = {
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'my-group',
    'auto.offset.reset': 'earliest'
}
consumer = Consumer(kafka_config)
consumer.subscribe(['my_topic'])

# Mixpanel setup
mp = Mixpanel('YOUR_MIXPANEL_TOKEN')

try:
    while True:
        msg = consumer.poll(1)

        if msg is None:
            continue
        if msg.error():
            if msg.error().code() == KafkaError._PARTITION_EOF:
                continue
            else:
                print(msg.error())
                break

        # Send to Mixpanel
        # The event_data contains the entire event. Consider extracting parsing the event for properties and explicitly assigning them instead.
        event_data = msg.value().decode('utf-8')
        mp.track('some_user_id', 'My Event', {'message': event_data})

finally:
    consumer.close()

```


To run this code:

1. Install Kafka and start a Kafka broker.
2. Install necessary Python packages:
    - pip install confluent-kafka
    - pip install mixpanel
3. Replace 'YOUR_MIXPANEL_TOKEN' with your actual Mixpanel token.
4. Run the code.

Google has a [great reference](https://cloud.google.com/pubsub/docs/handling-failures) on best practices for handling both retryable and non-retryable errors.
