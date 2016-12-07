import {Script} from './src/script';
import testData from './src/testData.json';
console.log("dupa");

const script = new Script();
console.log(JSON.stringify(script.process_incoming_request({request: {content: testData}}).content));

