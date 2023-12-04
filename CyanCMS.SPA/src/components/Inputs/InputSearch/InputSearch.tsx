import Form from 'react-bootstrap/Form';
import { type FormControlProps } from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineSearch } from 'react-icons/md';

export const InputSearch = ({
    formControlProps,
}: {
    formControlProps: FormControlProps;
}) => {
    return (
        <InputGroup className="mb-3">
            <Form.Control
                type="text"
                maxLength={100}
                aria-describedby="basic-addon1"
                style={{
                    borderRight: 'none',
                }}
                {...formControlProps}
            />
            <InputGroup.Text
                id="basic-addon1"
                style={{
                    backgroundColor: '#fff',
                    borderLeft: 'none',
                }}
            >
                <MdOutlineSearch size={20} color="#8038a6" />
            </InputGroup.Text>
        </InputGroup>
    );
};
