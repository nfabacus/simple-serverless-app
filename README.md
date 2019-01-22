# Serverless Framework - First Experiment

1. Install serverless framework globally
2. Create a project folder and cd into it.
3. Then, do the below in your project folder in your terminal. <br />
```sls create -t aws-nodejs``` -t means template.
4. change serverless.yml file as below:
  ```service: your-project-name ```
  also, adjust stage and region under provider as you like.
5. npm init
6. npm install --save-dev serverless-offline
7. add plugins to serverless.yml file.
  ```yaml
  plugins:
    - serverless-offline
  ```
8. add a route under events in serverless.yml file.
     ```yaml
       events:
         - http:
             path: message
             method: get
     ```
9. pass parameters
handler.js
```javascript
module.exports.hello = async (event, context) => {
  console.log(event.pathParameters.name)
  const reply = `Hello ${event.pathParameters.name}`;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: JSON.stringify(reply),
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
```
serverless.yml
```yaml
    events:
      - http:
          path: message/{name}
          method: get
```

10. Cron Job Example
```yaml
events:
      - schedule: rate(1 minute)
```

11. To run the function locally <br />
in your terminal
```sls invoke local -f hello```

12. deployment <br />
development:<br />
    ```sls deploy``` staging is set to dev in serverless.yml
    ```sls deploy -f hello``` to deploy specific function only

production:
```sls deploy -s production``` or
```sls deploy -s production -f hello``` 

13. Log <br />
in your terminal <br />
```sls logs -f hello -s dev --startTime 10m ``` dev logs from last 10 minutes. <br />
```sls logs -f hello -s dev -t ``` -t for watch mode <br />
```sls logs -f hello -s production --startTime 10m ```  production logs from last 10 minutes.<br />


14. Removing functions
by stage
in your terminal
```
sls remove -s dev -f hello
```
```
sls remove -s production -f hello
```
to remove all functions
```
sls remove -s dev
```
```
sls remove -s production
```
