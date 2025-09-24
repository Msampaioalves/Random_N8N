import { INodeType, INodeTypeDescription, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import axios from 'axios';
import icon from './icon';

export class Random implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Random',
    name: 'random',
    icon: 'file:icon.svg',
    group: ['transform'],
    version: 1,
    description: 'True Random Number Generator',
    defaults: {
      name: 'Random',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'Min',
        name: 'min',
        type: 'number',
        default: 1,
        required: true,
        description: 'Valor mínimo (inclusivo)',
      },
      {
        displayName: 'Max',
        name: 'max',
        type: 'number',
        default: 60,
        required: true,
        description: 'Valor máximo (inclusivo)',
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
      const min = this.getNodeParameter('min', i) as number;
      const max = this.getNodeParameter('max', i) as number;
      const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;
      const response = await axios.get(url);
      returnData.push({ json: { random: Number(response.data.trim()), min, max } });
    }
    return [returnData];
  }
}
