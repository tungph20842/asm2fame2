import { useGetProductByIdQuery, useUpdateProductMutation } from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { Button, Form, Input, Skeleton , Image } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
type FieldType = {
    name: string;
    price: number;
};
const AdminProductEdit = () => {
    const { idProduct } = useParams<{ idProduct: string }>();
    const { data: productData, isLoading } = useGetProductByIdQuery(idProduct || "");
    const [updateProduct] = useUpdateProductMutation();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [imageUrl, setImageUrl] = useState("");

    const handleImageLinkChange = (e) => {
      setImageUrl(e.target.value);
    };
    useEffect(() => {
        form.setFieldsValue({
          name: productData?.name,
          price: productData?.price,
          image: productData?.image, 
        });
        setImageUrl(productData?.image);
      }, [form, productData]);
    const onFinish = (values: IProduct) => {
        updateProduct({ ...values, id: idProduct })
            .unwrap()
            .then(() => navigate("/admin/product"));
    };
    return (
        <div>
        <header className="mb-4">
            <h2 className="font-bold text-2xl">Sửa sản phẩm : {productData?.name}</h2>
        </header>
        {isLoading ? (
            <Skeleton />
        ) : (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            autoComplete="off"
        >
        <Form.Item<FieldType>
            label="Tên sản phẩm"
            name="name"
            rules={[
                { required: true, message: "Vui lòng nhập tên sản phẩm!" },
                { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Giá sản phẩm" name="price">
            <Input />
        </Form.Item>
        <Form.Item label="Ảnh" name="image">
          <Input value={imageUrl} onChange={handleImageLinkChange} />
        </Form.Item>

        <div>
          {imageUrl && <Image src={imageUrl} alt="Ảnh" style={{ maxWidth: "100%" }} />}
        </div>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" danger htmlType="submit">
                {isLoading ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                    "Sửa"
                )}
            </Button>
            <Button
                type="primary"
                danger
                className="ml-2"
                onClick={() => navigate("/admin/product")}
            >
                Quay lại
            </Button>
        </Form.Item>
        </Form>
            )}
        </div>
    );
};

export default AdminProductEdit;
