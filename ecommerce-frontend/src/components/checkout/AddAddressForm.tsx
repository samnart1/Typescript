import InputField from "../shared/InputField";
import Spinners from "../shared/Spinners";
import { useForm } from "react-hook-form";
import { FaAddressCard } from "react-icons/fa";
import { useSelector } from "react-redux";

const AddAddressForm = () => {
    const { btnLoader } = useSelector((state) => state.errors);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
    });

    const onSaveAddressHandler = async () => {
        console.log("Login has been clicked!");
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSaveAddressHandler)} className="">
                <div className="flex items-center justify-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
                    <FaAddressCard className="mr-2 text-2xl" />
                    Add Address
                </div>
                {/* <hr className="mt-2 mb-5 text-slate-300" /> */}
                <div className="flex flex-col gap-4">
                    <InputField
                        label="Building Name"
                        id="building"
                        type="text"
                        errors={errors}
                        register={register}
                        required
                        message="*Building Name is required"
                        className=""
                        min=""
                        value=""
                        placeholder="Enter your Building Name"
                    />
                    <InputField
                        label="City"
                        id="city"
                        type="text"
                        errors={errors}
                        register={register}
                        required
                        message="*City is required"
                        className=""
                        min=""
                        value=""
                        placeholder="Enter your City"
                    />
                    <InputField
                        label="State"
                        id="state"
                        type="text"
                        errors={errors}
                        register={register}
                        required
                        message="*State is required"
                        className=""
                        min=""
                        value=""
                        placeholder="Enter your State"
                    />
                    <InputField
                        label="Pincode"
                        id="pincode"
                        type="number"
                        errors={errors}
                        register={register}
                        required
                        message="*Pincode is required"
                        className=""
                        min=""
                        value=""
                        placeholder="Enter your Pincode"
                    />
                    <InputField
                        label="Street"
                        id="street"
                        type="text"
                        errors={errors}
                        register={register}
                        required
                        message="*Street is required"
                        className=""
                        min=""
                        value=""
                        placeholder="Enter your Street"
                    />
                    <InputField
                        label="Country"
                        id="country"
                        type="text"
                        errors={errors}
                        register={register}
                        required
                        message="*Country is required"
                        className=""
                        min=""
                        value=""
                        placeholder="Enter your Country"
                    />
                </div>

                <button
                    disabled={btnLoader}
                    className="text-white bg-blue-500 px-4 py-2 rounded-md mt-4"
                    type="submit"
                >
                    {btnLoader ? (
                        <>
                            {" "}
                            <Spinners />
                            Loading...
                        </>
                    ) : (
                        <>Save</>
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddAddressForm;
