import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { InputSearch } from '../Inputs';
import type { SearcherProps } from './models';

interface FormSearcher {
    customSearch: string;
}

export const Searcher = ({ handleSearch, placeholder }: SearcherProps) => {
    const { register, handleSubmit } = useForm<FormSearcher>({
        defaultValues: {
            customSearch: '',
        },
    });

    const onSubmit: SubmitHandler<FormSearcher> = ({ customSearch }) =>
        handleSearch(customSearch.trim());

    return (
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <Col xs={12} md={6}>
                <InputSearch
                    formControlProps={{
                        ...register('customSearch'),
                        placeholder,
                    }}
                />
            </Col>
            <Col>
                <Button variant="green" className="px-5" type="submit">
                    Buscar
                </Button>
            </Col>
        </form>
    );
};
