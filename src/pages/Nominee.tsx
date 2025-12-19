
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { UserPlus, User, Mail, Phone, Heart, Users, Trophy, Building2, Star } from "lucide-react";
import Slide1 from "@/assets/Slide1.jpg";

import SEO from "@/components/SEO";

const Nominee = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        nominated_by: "",
        relationship: "",
        award_category: "",
        organization: "",
        reason: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, award_category: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('api/nominee.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Nomination Submitted!",
                    description: "We have received your award nomination.",
                });
                setFormData({
                    name: "", email: "", phone: "", nominated_by: "",
                    relationship: "", award_category: "", organization: "", reason: ""
                });
            } else {
                throw new Error(data.error || "Something went wrong");
            }
        } catch (error: any) {
            console.error(error);
            toast({
                title: "Registration Failed",
                description: error.message || "Failed to register nominee.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <SEO
                title="Nominate for Awards"
                description="Nominate deserving individuals for the Namma Puducherry Awards. Recognizing excellence in Healthcare, Education, Social Work, and more."
                keywords="Namma Puducherry Awards, Nominate Social Worker, Pondicherry Hero Awards, Best Doctor Award Puducherry"
            />
            <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
                {/* Left Side: Text & Form */}
                <div className="w-full lg:w-1/2 p-6 lg:p-12 overflow-y-auto">
                    <div className="max-w-xl mx-auto space-y-8 animate-fade-up">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                                Recognize Excellence
                            </span>
                            <h1 className="text-3xl lg:text-4xl font-display font-bold">
                                Award Nomination
                            </h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
                            <p className="text-muted-foreground leading-relaxed">
                                Nominate a deserving individual for the Namma Puducherry Awards. Fill out the details below to submit your nomination.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold flex items-center gap-2">
                                        <Trophy size={16} /> Award Category *
                                    </label>
                                    <div className="relative">
                                        <Select onValueChange={handleSelectChange} value={formData.award_category}>
                                            <SelectTrigger className="h-11 border-gray-200 focus:border-primary">
                                                <SelectValue placeholder="Select an Award Category" />
                                            </SelectTrigger>
                                            <SelectContent className="max-h-[300px]">
                                                {[
                                                    "Best Doctor Award", "Best Nurse Award", "Best Healthcare Worker Award", "Best Surgeon Award",
                                                    "Best Engineer Award", "Best Civil Engineer Award", "Best Architect Award",
                                                    "Best Teacher Award", "Best Professor Award", "Best Principal Award",
                                                    "Best Social Worker Award", "NGO of the Year", "Best Startup Founder Award",
                                                    "Best Farmer Award", "Best Police Officer Award", "Best Firefighter Award",
                                                    "Best Journalist Award", "Best Artist Award", "Best Craftsperson / Artisan Award",
                                                    "Best Environmentalist Award", "Best IT Professional Award", "Best Government Servant Award",
                                                    "Best Community Volunteer Award", "Best Youth Leader Award", "Best Women Entrepreneur Award",
                                                    "Best Public Service Award", "Best Sports Personality Award", "Best Coach / Trainer Award",
                                                    "Best Scientist Award", "Best Researcher Award", "Best Lawyer Award", "Best Judge Award",
                                                    "Best Chartered Accountant Award", "Best Banker Award", "Best Customer Service Champion",
                                                    "Best Retail Worker Award", "Best Driver / Transport Service Award", "Best Industrial Worker Award",
                                                    "Best Construction Worker Award", "Best Electrician Award", "Best Plumber Award",
                                                    "Best Hospitality & Tourism Worker Award", "Best Chef Award", "Best Writer / Author Award",
                                                    "Best Performer in Arts (Dance/Music)", "Best Public Health Educator Award", "Best CSR Initiative Award",
                                                    "Best Rural Development Leader", "Best Water Conservation Hero", "Best Disaster Response Hero"
                                                ].map((award) => (
                                                    <SelectItem key={award} value={award}>{award}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                                        <User size={16} /> Nominee Name *
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Jane Doe"
                                        required
                                        className="h-11 border-gray-200 focus:border-primary"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                                            <Mail size={16} /> Nominee Email *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="jane@example.com"
                                            required
                                            className="h-11 border-gray-200 focus:border-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
                                            <Phone size={16} /> Phone Number
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="h-11 border-gray-200 focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="organization" className="text-sm font-semibold flex items-center gap-2">
                                        <Building2 size={16} /> Organization / Description
                                    </label>
                                    <Input
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        placeholder="e.g. ABC Hospital"
                                        className="h-11 border-gray-200 focus:border-primary"
                                    />
                                </div>


                                <div className="space-y-2">
                                    <label htmlFor="reason" className="text-sm font-semibold flex items-center gap-2">
                                        <Star size={16} /> Reason for Nomination *
                                    </label>
                                    <Textarea
                                        id="reason"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        placeholder="Why does this person deserve the award?"
                                        className="min-h-[100px] border-gray-200 focus:border-primary resize-none"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="nominated_by" className="text-sm font-semibold flex items-center gap-2">
                                            <Users size={16} /> Your Name *
                                        </label>
                                        <Input
                                            id="nominated_by"
                                            name="nominated_by"
                                            value={formData.nominated_by}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                            className="h-11 border-gray-200 focus:border-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="relationship" className="text-sm font-semibold flex items-center gap-2">
                                            <Heart size={16} /> Relationship *
                                        </label>
                                        <Input
                                            id="relationship"
                                            name="relationship"
                                            value={formData.relationship}
                                            onChange={handleChange}
                                            placeholder="e.g. Colleague"
                                            required
                                            className="h-11 border-gray-200 focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <Button
                                    variant="hero"
                                    type="submit"
                                    className="w-full h-12 font-semibold text-base shadow-soft hover:shadow-card transition-shadow"
                                    disabled={loading}
                                >
                                    {loading ? "Registering..." : "Register Nominee"}
                                    <UserPlus size={18} className="ml-2" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Side: Flyer Image */}
                <div className="w-full lg:w-1/2 bg-gray-100 lg:h-[calc(100vh-80px)] lg:sticky lg:top-[80px] p-4 lg:p-8 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={Slide1}
                            alt="Award Flyer"
                            className="w-full h-full object-contain bg-white"
                        />
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default Nominee;
