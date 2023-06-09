import { CustomNode, GlobalVariableDataType } from '../nodes/types/NodeTypes';
import { RFState } from '../store/useStore';

export function parsePromptInputs(get: () => RFState, prompt: string, nodeIds: string[]): string {
	let parsedPrompt = prompt;
	const nodes = get().getNodes([...nodeIds, ...Object.keys(get().globalVariables)]);

	nodes.forEach((node: CustomNode) => {
		if (node.type === 'globalVariable') {
			const data = node.data as GlobalVariableDataType;
			if (data.type === 'text') {
				parsedPrompt = parsedPrompt.replace(
					new RegExp(`{{${node.data.name}}}`, 'g'),
					data.value as 'string',
				);
			} else if (data.type === 'list') {
				parsedPrompt = parsedPrompt.replace(
					new RegExp(`{{${node.data.name}}}`, 'g'),
					(data.value as { id: 'string'; value: 'string' }[])
						.map((obj) => obj.value)
						.join(' '),
				);
			}
		}
		parsedPrompt = parsedPrompt.replace(
			new RegExp(`{{${node.data.name}}}`, 'g'),
			node.data.response,
		);
	});
	return parsedPrompt;
}
