import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  context.log(
    'AzureWebJobsStorage🎈🔥: ' + process.env.FUNCTIONS_WORKER_RUNTIME
  );
  context.log('WEBSITE_SITE_NAME: 🔥🎈' + process.env.TEST_ENV_VALUE);
  const name = req.query.name || (req.body && req.body.name);
  const responseMessage = name
    ? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
    : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.' +
      process.env['TEST_ENV_VALUE'];

  context.res = {
    status: 200 /* Defaults to 200 */,
    body: responseMessage,
  };
};

export default httpTrigger;
