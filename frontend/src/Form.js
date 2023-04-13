import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class Form extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <FormItem label="title">
                        <Input placeholder='Put a Product Name'></Input>
                    </FormItem>
                    <FormItem label="price">
                        <Input placeholder='Put a Product Price'></Input>
                    </FormItem>
                    <FormItem label="title">
                        <Button type='primary'>Submit</Button>
                    </FormItem>
                </form>
            </div>
        );
    }
}

export default Form