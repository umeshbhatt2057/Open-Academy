import { useState } from "react";
import CommonForm from "@/components/common-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls, initialSignInFormData, initialSignUpFormData } from "@/config/index";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function AuthPage() {
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b">
                <Link to="/" className="flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 mr-4" />
                    <span className="font-extrabold text-xl">Open Academy</span>
                </Link>
            </header>
            <div className="flex items-center justify-center min-h-screen bg-background">
                <Tabs defaultValue="signin" className="w-full max-w-md">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin">
                        <CommonForm
                            formControls={signInFormControls}
                            formData={signInFormData}
                            setFormData={setSignInFormData}
                        />
                    </TabsContent>

                    <TabsContent value="signup">
                        <CommonForm
                            formControls={signUpFormControls}
                            formData={signUpFormData}
                            setFormData={setSignUpFormData}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

export default AuthPage;
