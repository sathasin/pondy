
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { UserPlus, BookOpen, MapPin, Phone, Mail, User, Upload, CreditCard } from "lucide-react";
import heroBg from "@/assets/Auro1.png";

import SEO from "@/components/SEO";

const Membership = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<File | null>(null);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        blood_group: "",
        email: "",
        phone: "",
        address: "", // Street Address
        district: "",
        constituency: "",
        pincode: "",
        interests: [] as string[],
        availability: [] as string[],
        available_from: "",
        available_to: "",
        weekly_hours: "",
        has_volunteered: "no",
        volunteer_details: "",
        motivation: "",
        skills: "",
        other_info: "",
        agreed_guidelines: false,
        agreed_unpaid: false,
        agreed_consent: false
    });

    const constituencies = {
        "Puducherry": [
            "01 - Mannadipet", "02 - Thirubuvanai (SC)", "03 - Ossudu (SC)", "04 - Mangalam",
            "05 - Villianur", "06 - Ozhukarai", "07 - Kadirgamam", "08 - Indira Nagar",
            "09 - Thattanchavady", "10 - Kamaraj Nagar", "11 - Lawspet", "12 - Kalapet",
            "13 - Muthialpet", "14 - Raj Bhavan", "15 - Oupalam", "16 - Orleampeth",
            "17 - Nellithope", "18 - Mudaliarpet", "19 - Ariankuppam", "20 - Manavely",
            "21 - Embalam (SC)", "22 - Nettapakkam", "23 - Bahour"
        ],
        "Karaikal": [
            "24 - Nedungadu (SC)", "25 - Thirunallar", "26 - Karaikal North",
            "27 - Karaikal South", "28 - Neravy T.R. Pattinam"
        ],
        "Mahe": ["29 - Mahe"],
        "Yanam": ["30 - Yanam"]
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        if (name === 'district') {
            setFormData(prev => ({ ...prev, [name]: value, constituency: "" }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleCheckboxChange = (category: 'interests' | 'availability', value: string) => {
        setFormData(prev => {
            const list = prev[category];
            if (list.includes(value)) {
                return { ...prev, [category]: list.filter(item => item !== value) };
            } else {
                return { ...prev, [category]: [...list, value] };
            }
        });
    };

    const handleAgreementChange = (name: string, checked: boolean) => {
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const validateForm = () => {
        const ageNum = parseInt(formData.age);
        if (isNaN(ageNum) || ageNum < 10 || ageNum > 100) {
            toast({ title: "Invalid Age", description: "Please enter a valid age between 10 and 100.", variant: "destructive" });
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
            return false;
        }

        const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast({ title: "Invalid Phone", description: "Please enter a valid phone number.", variant: "destructive" });
            return false;
        }

        if (!formData.blood_group) {
            toast({ title: "Blood Group Required", description: "Please select your blood group.", variant: "destructive" });
            return false;
        }

        if (!formData.district) {
            toast({ title: "District Required", description: "Please select your region/district.", variant: "destructive" });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (!formData.agreed_guidelines || !formData.agreed_unpaid || !formData.agreed_consent) {
            toast({
                title: "Agreement Required",
                description: "Please accept all terms and conditions to proceed.",
                variant: "destructive"
            });
            return;
        }

        setLoading(true);

        const formDataToSend = new FormData();
        // Personal
        formDataToSend.append('name', `${formData.first_name} ${formData.last_name}`); // Backward compatibility
        formDataToSend.append('first_name', formData.first_name);
        formDataToSend.append('last_name', formData.last_name);
        formDataToSend.append('age', formData.age);
        formDataToSend.append('gender', formData.gender);
        formDataToSend.append('blood_group', formData.blood_group);
        // Contact
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('address', formData.address); // Street Address
        formDataToSend.append('district', formData.district);
        formDataToSend.append('constituency', formData.constituency);
        formDataToSend.append('pincode', formData.pincode);

        // Interests & Availability (Send as JSON string or comma separated)
        formDataToSend.append('interests', JSON.stringify(formData.interests));
        formDataToSend.append('availability', JSON.stringify(formData.availability));
        // Commitment
        formDataToSend.append('available_from', formData.available_from);
        formDataToSend.append('available_to', formData.available_to);
        formDataToSend.append('weekly_hours', formData.weekly_hours);
        // Experience
        formDataToSend.append('has_volunteered', formData.has_volunteered);
        formDataToSend.append('volunteer_details', formData.volunteer_details);
        // Additional
        formDataToSend.append('motivation', formData.motivation);
        formDataToSend.append('skills', formData.skills);
        formDataToSend.append('other_info', formData.other_info);
        // Agreements
        formDataToSend.append('agreed_guidelines', formData.agreed_guidelines ? '1' : '0');
        formDataToSend.append('agreed_unpaid', formData.agreed_unpaid ? '1' : '0');
        formDataToSend.append('agreed_consent', formData.agreed_consent ? '1' : '0');

        if (photo) {
            formDataToSend.append('photo', photo);
        }

        try {
            const response = await fetch('api/membership.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Registration Successful!",
                    description: "Welcome to Namma Puducherry. Click below to view your ID Card.",
                    action: (
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-primary text-white border-none hover:bg-primary/90"
                            onClick={() => window.open(`api/card.php?id=${data.member_id}`, '_blank')}
                        >
                            <CreditCard className="mr-2 h-4 w-4" /> View ID Card
                        </Button>
                    ),
                    duration: 10000,
                });
                window.open(`api/card.php?id=${data.member_id}`, '_blank');

                // Reset form
                setFormData({
                    first_name: "", last_name: "", age: "", gender: "", blood_group: "", email: "", phone: "",
                    address: "", district: "", constituency: "", pincode: "",
                    interests: [], availability: [], available_from: "", available_to: "", weekly_hours: "",
                    has_volunteered: "no", volunteer_details: "", motivation: "", skills: "", other_info: "",
                    agreed_guidelines: false, agreed_unpaid: false, agreed_consent: false
                });
                setPhoto(null);
            } else {
                throw new Error(data.error || "Something went wrong");
            }
        } catch (error: any) {
            console.error(error);
            toast({
                title: "Registration Failed",
                description: error.message || "Failed to register. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <SEO
                title="Membership"
                description="Join Namma Puducherry as a member or volunteer. Be part of the change in Business, Education, Spirituality and Tourism."
                keywords="Join Namma Puducherry, Volunteer Pondicherry, Membership Form, Social Work Registration"
            />
            <section className="relative py-20 lg:py-28 flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Membership Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl space-y-6 animate-fade-up">
                        <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">Join Our Mission</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold">Become a Member</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full md:mx-0" />
                        <p className="text-lg text-slate-700 leading-relaxed font-medium">Join a community of changemakers dedicated to building a better Puducherry.</p>
                    </div>
                </div>
            </section>

            <section className="py-12 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-card rounded-2xl card-shadow border border-border/40 p-8 lg:p-10 animate-fade-up delay-200">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Personal Details */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-semibold border-b pb-2">Personal Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="first_name">First Name *</Label>
                                        <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleInputChange} required placeholder="First Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last_name">Last Name *</Label>
                                        <Input id="last_name" name="last_name" value={formData.last_name} onChange={handleInputChange} required placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="age">Age *</Label>
                                        <Input id="age" name="age" type="number" value={formData.age} onChange={handleInputChange} required placeholder="Age" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Gender *</Label>
                                        <Select onValueChange={(val) => handleSelectChange('gender', val)} value={formData.gender}>
                                            <SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Male">Male</SelectItem>
                                                <SelectItem value="Female">Female</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Blood Group *</Label>
                                    <Select onValueChange={(val) => handleSelectChange('blood_group', val)} value={formData.blood_group}>
                                        <SelectTrigger><SelectValue placeholder="Select Blood Group" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A+">A+</SelectItem>
                                            <SelectItem value="A-">A-</SelectItem>
                                            <SelectItem value="B+">B+</SelectItem>
                                            <SelectItem value="B-">B-</SelectItem>
                                            <SelectItem value="AB+">AB+</SelectItem>
                                            <SelectItem value="AB-">AB-</SelectItem>
                                            <SelectItem value="O+">O+</SelectItem>
                                            <SelectItem value="O-">O-</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="photo">Profile Photo *</Label>
                                    <Input id="photo" type="file" accept="image/*" onChange={handlePhotoChange} required className="pt-2" />
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-semibold border-b pb-2">Contact Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number *</Label>
                                        <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+91 98765 43210" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Region / District *</Label>
                                    <Select onValueChange={(val) => handleSelectChange('district', val)} value={formData.district || undefined}>
                                        <SelectTrigger><SelectValue placeholder="Select District" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Puducherry">Puducherry</SelectItem>
                                            <SelectItem value="Karaikal">Karaikal</SelectItem>
                                            <SelectItem value="Mahe">Mahe</SelectItem>
                                            <SelectItem value="Yanam">Yanam</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Assembly Constituency</Label>
                                    <Select onValueChange={(val) => handleSelectChange('constituency', val)} value={formData.constituency || undefined}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={formData.district ? "Select Constituency" : "Select District First"} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {formData.district ? (
                                                constituencies[formData.district as keyof typeof constituencies]?.map((c) => (
                                                    <SelectItem key={c} value={c}>{c}</SelectItem>
                                                ))
                                            ) : (
                                                <SelectItem value="placeholder" disabled>Please select a District first</SelectItem>
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Door No. / Street Name</Label>
                                    <Input id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="No. 123, Main Street" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="pincode">Pincode</Label>
                                    <Input id="pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="605001" maxLength={6} />
                                </div>
                            </div>

                            {/* Interests */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-semibold border-b pb-2">Your Interests</h3>
                                <Label className="text-muted-foreground">Select one or more:</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["Education & Skill Development", "Women Empowerment & Livelihoods", "Rural / Community Development", "Sustainable Agriculture / Environment", "Health & Wellness", "Other"].map((interest) => (
                                        <div key={interest} className="flex items-center space-x-2">
                                            <Checkbox id={interest} checked={formData.interests.includes(interest)} onCheckedChange={() => handleCheckboxChange('interests', interest)} />
                                            <Label htmlFor={interest}>{interest}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-semibold border-b pb-2">Availability</h3>
                                <Label className="text-muted-foreground">Select at least one:</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["Office Hours", "After Office Hours", "Weekdays", "Weekends"].map((item) => (
                                        <div key={item} className="flex items-center space-x-2">
                                            <Checkbox id={item} checked={formData.availability.includes(item)} onCheckedChange={() => handleCheckboxChange('availability', item)} />
                                            <Label htmlFor={item}>{item}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Commitment Period */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-semibold border-b pb-2">Commitment Period & Hours</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="available_from">Available From</Label>
                                        <Input id="available_from" name="available_from" type="date" value={formData.available_from} onChange={handleInputChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="available_to">Available To</Label>
                                        <Input id="available_to" name="available_to" type="date" value={formData.available_to} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Weekly Availability</Label>
                                    <RadioGroup onValueChange={(val) => handleSelectChange('weekly_hours', val)} value={formData.weekly_hours}>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="Less than 5 hours" id="r1" /><Label htmlFor="r1">Less than 5 hours</Label></div>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="5-10 hours" id="r2" /><Label htmlFor="r2">5–10 hours</Label></div>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="10-20 hours" id="r3" /><Label htmlFor="r3">10–20 hours</Label></div>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="More than 20 hours" id="r4" /><Label htmlFor="r4">More than 20 hours</Label></div>
                                    </RadioGroup>
                                </div>
                            </div>

                            {/* Past Experience */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-semibold border-b pb-2">Past Experience</h3>
                                <div className="space-y-2">
                                    <Label>Have you volunteered before?</Label>
                                    <RadioGroup onValueChange={(val) => handleSelectChange('has_volunteered', val)} value={formData.has_volunteered} className="flex gap-6">
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="v_yes" /><Label htmlFor="v_yes">Yes</Label></div>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="v_no" /><Label htmlFor="v_no">No</Label></div>
                                    </RadioGroup>
                                </div>
                                {formData.has_volunteered === 'yes' && (
                                    <div className="space-y-2">
                                        <Label htmlFor="volunteer_details">Brief Details</Label>
                                        <Textarea id="volunteer_details" name="volunteer_details" value={formData.volunteer_details} onChange={handleInputChange} placeholder="Tell us about your past volunteering..." />
                                    </div>
                                )}
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-semibold border-b pb-2">Additional Information</h3>
                                <div className="space-y-2">
                                    <Label htmlFor="motivation">What motivates you to volunteer with us?</Label>
                                    <Textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleInputChange} placeholder="Your motivation..." />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="skills">Any special skills or languages spoken?</Label>
                                    <Textarea id="skills" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills, languages..." />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="other_info">Anything else you’d like us to know?</Label>
                                    <Textarea id="other_info" name="other_info" value={formData.other_info} onChange={handleInputChange} placeholder="Comments..." />
                                </div>
                            </div>

                            {/* Agreement */}
                            <div className="space-y-4 bg-muted/30 p-6 rounded-lg">
                                <h3 className="text-xl font-display font-semibold border-b pb-2">Agreement & Consent</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-2">
                                        <Checkbox id="agreed_guidelines" checked={formData.agreed_guidelines} onCheckedChange={(c) => handleAgreementChange('agreed_guidelines', c as boolean)} />
                                        <Label htmlFor="agreed_guidelines" className="leading-tight">I have read and understood the foundation’s volunteer guidelines.</Label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <Checkbox id="agreed_unpaid" checked={formData.agreed_unpaid} onCheckedChange={(c) => handleAgreementChange('agreed_unpaid', c as boolean)} />
                                        <Label htmlFor="agreed_unpaid" className="leading-tight">I understand volunteer work is unpaid and I agree to commit to the tasks and hours as discussed.</Label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <Checkbox id="agreed_consent" checked={formData.agreed_consent} onCheckedChange={(c) => handleAgreementChange('agreed_consent', c as boolean)} />
                                        <Label htmlFor="agreed_consent" className="leading-tight">I consent to the use of my details for volunteer coordination, and to be contacted by the foundation.</Label>
                                    </div>
                                </div>
                            </div>

                            <Button variant="hero" type="submit" className="w-full h-12 font-semibold text-base shadow-soft hover:shadow-card transition-shadow" disabled={loading}>
                                {loading ? "Registering..." : "Submit Registration"}
                                <UserPlus size={18} className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Membership;
