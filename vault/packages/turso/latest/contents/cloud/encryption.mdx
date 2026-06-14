---
title: BYOK Encryption
---

All databases are encrypted-at-rest at the volume level in the Turso Cloud, as part of our SOC2 standards. See [our trust center](https://trust.turso.tech) for details.

For Pro, and Enterprise customers, there is the option to encrypt the databases with a key that you provide (Bring-Your-Own-Key Encryption, or BYOK), as described below.

BYOK Encryption happens at the server level, making sure that nobody has access to your data at any time. In fact, because it is possible to encrypt different databases with different keys, it is possible for you to use different keys for different customers' databases. If the keys themselves are provided by your customers, BYOK Encryption offers your customers the guarantee that not even you can have access to their data.

Turso Cloud BYOK encryption for data at rest uses industry-standard AEAD algorithms. Each database page is encrypted individually, ensuring data integrity and security across all environments. BYOK encryption is available on Pro, and [Enterprise](https://tur.so/turso-enterprise-chat) plans.

<Info>
  **You hold the keys.** Each database can be encrypted with its own unique key that only you control. Turso never sees or stores your encryption keys. Encryption works seamlessly with both remote queries and sync.
</Info>

- **Page-level encryption**: Each 4 KiB page is encrypted individually with a unique nonce
- **AEAD algorithms**: Support for AEGIS-256, AES-GCM, and ChaCha20Poly1305
- **Data integrity**: Built-in authentication tags prevent tampering and corruption
- **In-memory keys**: Encryption keys are never stored on disk

Turso Cloud with BYOK encryption is perfect for:

<CardGroup cols={2}>
    <Card title="AI Agents" icon="robot">
     Manage a fleet of trusted agents that deal with personal private data
    </Card>
  <Card title="Fintech Applications" icon="credit-card">
    Meet regulatory requirements for sensitive financial data
  </Card>

<Card title="Privacy-Focused Products" icon="user-shield">
  Build user trust with strong data protection
</Card>

<Card title="Healthcare Apps" icon="heart-pulse">
  Protect patient data and meet HIPAA compliance
</Card>

  <Card title="AI/ML Applications" icon="brain">
    Secure training data and model outputs
  </Card>
</CardGroup>

## What's Encrypted

<CardGroup cols={1}>
  <Card title="Encrypted" icon="lock">
    - The database file and Write-Ahead Log (WAL) file on disk and on S3.
  </Card>
</CardGroup>

## Generate an Encryption Key

Generate a secure encryption key in base64 format. The key size depends on the cipher you choose:

<Tabs>
  <Tab title="256-bit (32 bytes)">
    For AEGIS-256 variants and AES-256-GCM:

    ```bash
    openssl rand -base64 32
    ```

    Output example:
    ```
    YUfkdsD2SJe4KzTB8n6CjwCgs1YIW6k1xxMEguRuI5s=
    ```

  </Tab>

  <Tab title="128-bit (16 bytes)">
    For AEGIS-128 variants and AES-128-GCM:

    ```bash
    openssl rand -base64 16
    ```

    Output example:
    ```
    XG1iWMFBFYEYrmYxjWDf5w==
    ```

  </Tab>
</Tabs>

<Warning>
  **Store your key securely!** If you lose the encryption key, you will not be
  able to access your encrypted database. Keys are never stored anywhere in the Turso Cloud.
</Warning>

## Create an Encrypted Database

<Steps>

<Step title="Launch with encryption">

Use the `--remote-encryption-key`, `--remote-encryption-cipher` flags and specify your cipher and key in database creation command:

```bash
turso db create my-secret-db --remote-encryption-key "YOUR_SECRET_KEY" --remote-encryption-cipher aegis128l
```

Replace `YOUR_SECRET_KEY` with the key you generated above. You can also set the `TURSO_DB_REMOTE_ENCRYPTION_KEY` environment variable instead of passing the flag each time.

</Step>

<Step title="Create and insert data">

Use `--remote-encryption-key` flag to start the shell, create a table and insert some data:

```bash
turso db shell my-secret-db --remote-encryption-key "YOUR_SECRET_KEY"
```
```sql
CREATE TABLE secrets (id INT, data TEXT);
INSERT INTO secrets VALUES (1, 'sensitive information');
INSERT INTO secrets VALUES (2, 'confidential data');
```

</Step>

<Step title="Verify encryption">

Exit the shell (type `.quit`) and try to open the database without the key:

```bash
turso db shell my-secret-db
```

You won't be able to access the data. The database is encrypted in the cloud.

</Step>

</Steps>

## Upload Existing Database

To upload an existing encrypted database, provide the cipher and key flags during creation:

```bash
turso db create my-secret-db --remote-encryption-key "YOUR_SECRET_KEY" --remote-encryption-cipher aegis128l --from-file my-db.db
```

## Branching and Point-in-Time Recovery (PITR)

Encrypted databases support [branching](/features/branching), and [point-in-time recovery (PITR)](/features/point-in-time-recovery). The new branch will use the same cipher algorithm and the same encryption key. During creation you need to specify the same encryption key that was used for the parent database:

```bash
turso db create my-secret-db-fork --remote-encryption-key "YOUR_SECRET_KEY" --from-db my-secret-db
```

## Rekeying
Rekeying is not supported yet. However, you can export the database and create a new one with a different cipher and key:

```bash
turso db export my-secret-db --remote-encryption-key "YOUR_SECRET_KEY"
turso db create my-new-secret-db --remote-encryption-key "YOUR_NEW_SECRET_KEY" --remote-encryption-cipher aegis256 --from-file my-secret-db.db
```

## Supported Ciphers

Turso Cloud supports multiple variants of three AEAD encryption algorithms, offering different trade-offs between performance and compatibility.

### AES-GCM

NIST-approved standard for compliance requirements. Widely supported across industries.

| Cipher          | Key Size           | Cipher Code   | Use Case                             |
| --------------- | ------------------ | ----------- | ------------------------------------ |
| **AES-128-GCM** | 128-bit (16 bytes) | `aes128gcm` | Compliance with 128-bit requirements |
| **AES-256-GCM** | 256-bit (32 bytes) | `aes256gcm` | Maximum security for compliance      |

### ChaCha20-Poly1305

| Cipher          | Key Size           | Cipher Code   | Use Case                             |
| --------------- | ------------------ | ----------- | ------------------------------------ |
| **ChaCha20-Poly1305** | 256-bit (32 bytes) | `chacha20poly1305` | Alternative for AES      |


### AEGIS

Modern, high-performance cipher family optimized for speed. **Recommended for most use cases.**

| Cipher          | Key Size           | Cipher Code    | Use Case                               |
| --------------- | ------------------ | ------------ | -------------------------------------- |
| **AEGIS-128L**  | 128-bit (16 bytes) | `aegis128l`  | Balanced performance, 128-bit security |
| **AEGIS-128X2** | 128-bit (16 bytes) | `aegis128x2` | 2x parallel processing                 |
| **AEGIS-128X4** | 128-bit (16 bytes) | `aegis128x4` | 4x parallel processing, maximum speed  |
| **AEGIS-256**   | 256-bit (32 bytes) | `aegis256`   | Balanced 256-bit security              |
| **AEGIS-256X2** | 256-bit (32 bytes) | `aegis256x2` | 2x parallel processing, 256-bit        |
| **AEGIS-256X4** | 256-bit (32 bytes) | `aegis256x4` | 4x parallel, maximum speed & security  |

<Info>

**Choosing a cipher:**

- Use `aegis128l` for 128 bit encryption, `aegis256` for 256 bit encryption (default recommendation)
- For AES, use `aes128gcm` for 128 bit encryption, `aes256gcm` or `chacha20poly1305` for 256 bit encryption

</Info>

## Future Work

Future encryption features in development:

- **Encrypt existing databases**: Migrate unencrypted databases to encrypted format
- **Key rotation**: Update encryption keys without data loss
