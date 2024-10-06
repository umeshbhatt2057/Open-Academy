import { useState } from "react";
import CommonForm from "@/components/common-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls, initialSignInFormData, initialSignUpFormData } from "@/config/index";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function AuthPage() {
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="px-4 lg:px-6 h-14 flex items-center border-b">
                <Link to="/" className="flex items-center">
                    <GraduationCap className="h-8 w-8 mr-4" />
                    <span className="font-extrabold text-xl">Open Academy</span>
                </Link>
            </header>

            {/* Main content */}
            <div className="flex items-center justify-center flex-grow bg-background">
                <Tabs defaultValue="signin" className="w-full max-w-md">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    {/* Sign In Tab */}
                    <TabsContent value="signin">
                        <Card className="p-6 space-y-4">
                            <CardHeader>
                                <CardTitle>Sign in to your account</CardTitle>
                                <CardDescription>Enter your email and password to access your account</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CommonForm
                                    formControls={signInFormControls}
                                    formData={signInFormData}
                                    setFormData={setSignInFormData}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Sign Up Tab */}
                    <TabsContent value="signup">
                        <Card className="p-6 space-y-4">
                            <CardHeader>
                                <CardTitle>Create a new account</CardTitle>
                                <CardDescription>Enter your details to get started</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CommonForm
                                    formControls={signUpFormControls}
                                    formData={signUpFormData}
                                    setFormData={setSignUpFormData}
                                    
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

export default AuthPage;
