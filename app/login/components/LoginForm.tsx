import { User, Eye, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TextInput } from "@/components/ui/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginValues } from "@/components/schemas";
import { api } from "@/app/api/axiosInstance";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";

export function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      stayLoggedIn: false,
    },
  });

  const onSubmit = async (values: LoginValues) => {
    try {
      const response = {
        data: {
          username: values.username,
          password: values.password,
          stayLoggedIn: values.stayLoggedIn,
          token: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        },
      };
      //   const response = await api.post("/users/login", values);
      if (response) {
        localStorage.setItem("auth_token", response.data.token || "");
        toast.success("Login successful");
        router.push("/dashboard/inventory");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data.message || "Invalid credentials");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6] text-white">
        <Box size={28} />
      </div>

      <h2 className="text-2xl font-bold text-slate-800">Home Inventory</h2>
      <p className="mb-8 text-sm text-slate-500">
        Track and organize your things
      </p>

      <div className="w-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
        <h3 className="mb-6 text-lg font-semibold text-slate-800">
          Sign in to your account
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <div className="relative">
                <TextInput
                  label="Username"
                  name="username"
                  placeholder="Type your username"
                  type="text"
                  control={form.control}
                />
                <User
                  className="absolute right-3 top-7.5 text-slate-400"
                  size={18}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <TextInput
                  label="Password"
                  name="password"
                  placeholder="Type password"
                  type="password"
                  control={form.control}
                />
                <Eye
                  className="absolute right-3 top-7.5 text-slate-400"
                  size={18}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="stayLoggedIn"
                  onCheckedChange={(val) =>
                    form.setValue("stayLoggedIn", !!val)
                  }
                  checked={form.watch("stayLoggedIn")}
                />
                <label htmlFor="stayLoggedIn" className="text-sm">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <Button
              size="sm"
              className="w-full bg-[#3B82F6] py-3 hover:bg-blue-700"
            >
              Sign in →
            </Button>
          </form>
        </Form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <button className="font-semibold text-blue-600 hover:underline">
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}
