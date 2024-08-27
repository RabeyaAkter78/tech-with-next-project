"use client";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
function Contact() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <div className="container mx-auto my-32">
      <SectionTitle Heading={"Get in Touch"}></SectionTitle>
      <div className="">
        <div className="flex justify-center items-center my-8">
          <Upload
            name="avatar"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </div>

        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default Contact;
