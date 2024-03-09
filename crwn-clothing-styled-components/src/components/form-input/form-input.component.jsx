import { FormInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ label, inputOption }) => {
	return (
		<Group>
			<Input {...inputOption} />
			{label && <FormInputLabel shrink={inputOption.value.length}>{label}</FormInputLabel>}
		</Group>
	);
};

export default FormInput;
