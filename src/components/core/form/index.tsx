import { Form } from 'antd';
import { FormProps } from 'antd/lib/form/Form';
import { Controls, MyFormItemProps } from '../form-item/types';
import MyFormItem from '../form-item';

export type MyFormOptions = Array<MyFormItemProps<Controls | undefined>>;

export interface MyFormProps<T> extends FormProps<T> {
  options?: MyFormOptions;
}

const BaseForm = <Values extends object>(props: MyFormProps<Values>) => {
  const { options, children, ...rest } = props;
  return (
    <Form<Values> {...rest}>
      {options?.map((option, index) => {
        return <MyFormItem {...option} key={index} />;
      })}
      {children}
    </Form>
  );
};

const MyForm = Object.assign(BaseForm, Form, { Item: MyFormItem });

export default MyForm;
