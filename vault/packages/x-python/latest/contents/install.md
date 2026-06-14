> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Install

The XDK Python SDK is available directly from the GitHub repository and can be installed via `pip`.

## Prerequisites

* Python 3.8 or higher.
* `pip` and `venv` for virtual environments (recommended).

## Quick Install

Install the XDK from the GitHub subdirectory:

```bash theme={null}
pip install xdk
```

This fetches the latest generated version from the `main` branch.

## Development Install

For development or contributing:

1. Clone the repository:
   ```bash theme={null}
   git clone https://github.com/xdevplatform/xdk.git
   cd xdk/python
   ```
2. Install dependencies in editable mode:
   ```bash theme={null}
   pip install -e .
   ```
   This installs the SDK and its runtime dependencies.
3. (Optional) Install dev dependencies for testing/linting:
   ```bash theme={null}
   pip install -e .[dev]
   ```

## Verification

Test the installation:

```python theme={null}
import xdk
print(xdk.__version__)  # Should print the XDK version
```

**Note:** Since the XDK is generated using the OpenAPI spec, always check the [X API changelog](https://docs.x.com/changelog) and XDK release notes in the repo for any changes.
For detailed code examples using the Python XDK, check out our [code samples GitHub repo](https://github.com/xdevplatform/samples/tree/main/python).
