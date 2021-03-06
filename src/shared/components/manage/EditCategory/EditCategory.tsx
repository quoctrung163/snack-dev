import * as React from 'react';
import { useTranslation } from 'react-i18next';

import InputField from '../../../components/common/InputField/InputField';
import CircleDashedLoader from '../../loader/CircleDashedLoader/CircleDashedLoader';

interface Props {
    handleSubmit: (e: React.FormEvent) => void;
    values: any;
    loader: boolean;
    handleChange: (name: any) => (event: any) => void;
}

const EditCategory = ({ handleChange, values, handleSubmit, loader }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>{t('editCategories.editCategory')}</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="categoryName"
                    placeholder={t('editCategories.category')}
                    text={t('editCategories.requireField')}
                    onChange={handleChange('categoryName')}
                    value={values?.categoryName}
                    required={true}
                />
                <button type="submit" className="btn btn--gradient">
                    {loader === true ? <CircleDashedLoader /> : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default EditCategory;
