import {DynamoDB} from 'aws-sdk';
import DocumentClient = DynamoDB.DocumentClient;

export const databaseOptions = {
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-2',
    sslEnabled: false,
};

export class DatabaseClient { 

    private databaseClient: DynamoDB.DocumentClient;
    private tableName: string = 'TestTable';

    constructor() {
        this.databaseClient = new DynamoDB.DocumentClient(databaseOptions);
    }

    public save(): Promise<{}> {
        const params = {
            TableName: this.tableName,
            Item: {
                'TestTablePrimaryKey': 'APrimaryKeyValue',
                'PropertyOne': 'propertyOneValue1',
                'PropertyTwo': 'propertyTwoValue',
                'PropertyThree': 'propertyThreeValue',
            }
        };

        return this.databaseClient.put(params).promise()
            .then((response) => {
                console.log('DatabaseClient -> save -> then: response', response);
                return {};
            })
            .catch((err) => {
                console.log('DatabaseClient -> save -> error: response', err);
                return {};  // TODO - fix
            });
    }
    public get(): Promise<DocumentClient.GetItemOutput> {
        var params = {
            TableName: this.tableName,
            Key:{
                'TestTablePrimaryKey': 'APrimaryKeyValue'
            }
        };

        return this.databaseClient.get(params).promise()
            .then((response) => {
                console.log('DatabaseClient -> get -> then: response', response);
                return response;
            })
            .catch((err) => {
                console.log('DatabaseClient -> get -> error: response', err);
                return {};  // TODO - fix
            });
    }
    public delete(): Promise<{}> {
        var params = {
            TableName: this.tableName,
            Key:{
                'TestTablePrimaryKey': 'APrimaryKeyValue'
            }
        };

        return this.databaseClient.delete(params).promise()
            .then((response) => {
                console.log('DatabaseClient -> delete -> then: response', response);
                return response;
            })
            .catch((err) => {
                console.log('DatabaseClient -> delete -> error: response', err);
                return {};  // TODO - fix
            });

    }
}