import * as React from "react";
import { Form, Input, Select, Checkbox, Button, Modal, Grid } from "antd";
import styles from "@/styles/dashboard.module.scss"
import {PlusCircleFilled} from "@ant-design/icons"

const {useBreakpoint} = Grid

type CreateFormProps={
    setDataCard:React.Dispatch<React.SetStateAction<{
        id: string;
        jobTitle: string;
        reqType: string;
        reqStatus: boolean;
        orgStructure: string;
        Units: string[];
        hiringManagers: string[];
        vacanciesBudget: number;
        vacanciesOpen: number;
        vacanciesField: number;
    }[]>>
}


const CreateForm = ({setDataCard}: CreateFormProps) => {
  const [form] = Form.useForm();
  const [open, setOpen] = React.useState(false);
  const [reqStatus, setReqStatus] = React.useState(false);
  const [units, setUnits] = React.useState<string[]>([]);
  const [hiringManagers, setHiringManagers] = React.useState<string[]>([]);
  const {xl} = useBreakpoint()

  const handleReqStatusChange = (e: any) => {
    setReqStatus(e.target.checked);
  };

  const handleUnitsChange = (value: string[]) => {
    setUnits(value);
  };

  const handleHiringManagersChange = (value: string[]) => {
    setHiringManagers(value);
  };

  const onFinish = (values: any) => {
    setDataCard(prevData => [{...values,id: prevData.length},...prevData])
    console.log(values)
    form.resetFields()
    setOpen(false)
  };
  return (
    <>
    <Button size={"large"} onClick={()=>setOpen(true)} type="primary"  className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`} icon={<PlusCircleFilled />}>{xl?"Add new Job":""}</Button>
    <Modal
      title="Add Job Vacancy"
      okText="Create"
      open={open}
      cancelText="Cancel"
      onOk={() => {
        form.validateFields().then((values) => {
          onFinish(values);
        });
      }}
      onCancel={()=>setOpen(false)}
    >
      <Form labelAlign={"left"} labelCol={{span:10}} form={form}>
        <Form.Item
          name="jobTitle"
          label="Job Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="reqType"
          label="Type of Vacancy"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="Type1">Type1</Select.Option>
            <Select.Option value="Type2">Type2</Select.Option>
            <Select.Option value="Type3">Type3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="reqStatus" label="Status" valuePropName="checked">
          <Checkbox onChange={handleReqStatusChange}>Open</Checkbox>
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="orgStructure" label="Organization Structure">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="Units" label="Units">
          <Select mode="multiple" onChange={handleUnitsChange}>
            <Select.Option value="unit1">Unit 1</Select.Option>
            <Select.Option value="unit2">Unit 2</Select.Option>
            <Select.Option value="unit3">Unit 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="hiringManagers" label="Hiring Managers">
          <Select mode="multiple" onChange={handleHiringManagersChange}>
            <Select.Option value="manager1">Manager 1</Select.Option>
            <Select.Option value="manager2">Manager 2</Select.Option>
            <Select.Option value="manager3">Manager 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="vacanciesBudget" label="Vacancies Budget">
          <Input type="number" />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="vacanciesOpen" label="Open Vacancies">
          <Input type="number" />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="vacanciesField" label="Vacancies Field">
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
    </>
  );
};

export default CreateForm;
