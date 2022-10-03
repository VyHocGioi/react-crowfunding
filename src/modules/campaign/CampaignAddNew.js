import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, TextArea } from "components/input";
import { Label } from "components/label";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { Button } from "components/button";
import { useEffect } from "react";
import useOnChange from "hooks/useOnchange";
import { toast } from "react-toastify";
import DatePicker from "react-date-picker";
import { apiURL, imgbbAPI } from "config/config";
import ImageUpload from "image/ImageUpload";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddnew = () => {
  const [content, setContent] = useState("");
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const [countries, setContries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnChange(500);
  const resetValues = () => {
    setStartDate("");
    setEndDate("");
  };
  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        console.log(
          "🚀 ~ file: CampaignAddnew.js ~ line 28 ~ fetchCountries ~ response",
          response.data
        );
        setContries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);
  const handleAddNewCampaign = async (values) => {
    console.log(
      "🚀 ~ file: CampaignAddnew.js ~ line 43 ~ handleAddNewCampaign ~ values",
      values
    );
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        content,
        StartDate,
        EndDate,
      });
      toast.success("Create campaign successfully");
      resetValues();
    } catch (error) {
      toast.error("can not create campaign");
    }
  };
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const categoriesData = ["architecture", "education"];
  // const handleUploadImage = async (e)=>{
  //             console.log("upload: ~ file", file);
  //         const bodyFormData = new FormData();
  //         console.log("upload: ~ bodyFormData", bodyFormData);
  //         bodyFormData.append("image", file);
  //         const response = await axios({
  //           method: "post",
  //           url: imgbbAPI,
  //           data: bodyFormData,
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         });
  //         onChange(name, response.data.data.url)
  //         //https://source.unsplash.com/random
  // }
  return (
    <div className="bg-white rounded-xl px-[66px] py-10  ">
      <div className="text-center">
        <h1 className="py-4 bg-opacity-5 px-14 bg-text-4 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={
                  getDropdownLabel("category") || "Select category"
                }></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    onClick={() => {
                      handleSelectDropdownOption("category", category);
                    }}>
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description</Label>
          <TextArea
            name="short_description"
            placeholder="Write a short description"
            control={control}></TextArea>
        </FormGroup>
        <div className=""></div>
        <FormGroup>
          <Label>Story</Label>
          <div className="text-center">
            <ReactQuill
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Write your story....."
            />
          </div>
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Featured Image</Label>
            <ImageUpload onChange={setValue}></ImageUpload>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Goal</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised amount</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input
              control={control}
              name="Amount Prefilled"
              placeholder="$0.00 USD"></Input>
            <p className="text-sm font-medium text-text-3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input
              control={control}
              name="video"
              placeholder="video"></Input>
            <p className="text-sm font-medium text-text-3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    onClick={() => {
                      handleSelectDropdownOption("category", category);
                    }}>
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder="select country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  // placeholder={getDropdownLabel("country")}
                  onChange={setFilterCountry}></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={handleSelectDropdownOption(
                        "country",
                        country?.name?.common
                      )}>
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          {" "}
          <FormGroup>
            <Label>Start date</Label>
            <DatePicker
              onChange={setStartDate}
              value={StartDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label>End date</Label>
            <DatePicker
              onChange={setEndDate}
              value={EndDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
        </FormRow>
        <div className="text-center">
          <Button
            className="bg-primary"
            type="submit">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddnew;
