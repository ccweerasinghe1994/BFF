# Configure your environment

## Before you get started, make sure you have the following requirements in place

An Azure account with an active subscription. Create an account for free.

Node.js 16.x or Node.js 18.x (preview). Use the node --version command to check your version.

Visual Studio Code on one of the supported platforms.

The Azure Functions extension for Visual Studio Code.

Azure Functions Core Tools 4.x.

## storing secrets

As a best practice, secrets and connection strings should be managed using app settings, rather than configuration files. This limits access to these secrets and makes it safe to store files such as function.json in public source control repositories.

App settings are also useful whenever you want to change configuration based on the environment. For example, in a test environment, you may want to monitor a different queue or blob storage container.

App setting binding expressions are identified differently from other binding expressions: they are wrapped in percent signs rather than curly braces. For example if the blob output binding path is %Environment%/newblob.txt and the Environment app setting value is Development, a blob will be created in the Development container.

When a function is running locally, app setting values come from the local.settings.json file.

The connection property of triggers and bindings is a special case and automatically resolves values as app settings, without percent signs.

```json
{
  "bindings": [
    {
      "name": "order",
      "type": "queueTrigger",
      "direction": "in",
      "queueName": "%input_queue_name%",
      "connection": "MY_STORAGE_ACCT_APP_SETTING"
    }
  ]
}
```

### usefull links

[functions binding express patterns](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-expressions-patterns)

[module-exports-with-azure-functions](https://stackoverflow.com/questions/61827831/how-can-i-make-axios-requests-outside-of-module-exports-with-azure-functions-and)
