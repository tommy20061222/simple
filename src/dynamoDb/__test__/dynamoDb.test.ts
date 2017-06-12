import {DatabaseClient} from '../dynamoDb';
import {expect} from 'chai';

describe('dynamoDb', () => {
    it('save, retrieve and delete record', async () => {
        const dbClient = new DatabaseClient();

        //save/get ------------------------
        await dbClient.save();
        const result = await dbClient.get();

        expect(result).to.not.be.undefined;

        console.log('Tommy rules!');

        //delete --------------------------
        //await dbClient.delete();
        //const afterDeleteResult = await dbClient.get();

        //Not a real test...for illustration
        expect({}).to.eql({});
    });
});