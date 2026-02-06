import React, { useState, useEffect, useRef } from 'react';
import { User, Mail, Edit2, Calendar, ShieldCheck, Activity, Save, X, Camera } from 'lucide-react';

interface UserData {
    fullName: string;
    email: string;
    memberSince: string;
    accountType: string;
    totalSessions: number;
    profileImage?: string;
}

const AccountSettings: React.FC = () => {
    const [view, setView] = useState<'profile' | 'edit'>('profile');
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    // Edit Form States
    const [formData, setFormData] = useState({ fullName: '', email: '', profileImage: '' });
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Sample data until backend integration
                const data: UserData = {
                    fullName: "John Doe",
                    email: "john.doe@example.com",
                    memberSince: "January 2025",
                    accountType: "Premium",
                    totalSessions: 47,
                    profileImage: "" // Can provide a URL here
                };
                setUser(data);
                setFormData({
                    fullName: data.fullName,
                    email: data.email,
                    profileImage: data.profileImage || ''
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    // Show preview when an image is selected
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profileImage: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        try {
            // When sending data to backend (as Base64 or Multipart form data)
            if (user) {
                setUser({ ...user, ...formData });
            }
            setView('profile');
        } catch (error) {
            alert("Failed to update profile.");
        }
    };

    if (loading) return <div className="p-10 font-bold">Loading...</div>;
    if (!user) return <div className="p-10 text-red-500">User not found.</div>;

    // View: Edit Form
    if (view === 'edit') {
        return (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">Edit Profile</h2>
                    <button onClick={() => setView('profile')} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <X size={24} className="text-slate-500" />
                    </button>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 max-w-2xl">
                    <div className="flex flex-col items-center mb-8">
                        {/* Image Upload Area */}
                        <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-50 dark:border-slate-800 relative">
                                {formData.profileImage ? (
                                    <img src={formData.profileImage} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <User size={50} className="text-slate-400" />
                                    </div>
                                )}
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Camera className="text-white" size={24} />
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white border-2 border-white dark:border-slate-900 shadow-md">
                                <Edit2 size={14} />
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <p className="text-xs font-bold text-slate-400 mt-3 uppercase tracking-wider">Tap to change photo</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-500 ml-1">Full Name</label>
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 flex items-center gap-4 focus-within:border-blue-500 transition-all">
                                <User className="text-slate-400" size={20} />
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="bg-transparent flex-1 outline-none text-slate-800 dark:text-white font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-500 ml-1">Email Address</label>
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 flex items-center gap-4 focus-within:border-blue-500 transition-all">
                                <Mail className="text-slate-400" size={20} />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-transparent flex-1 outline-none text-slate-800 dark:text-white font-medium"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button onClick={handleSave} className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100">
                                <Save size={20} /> Save Changes
                            </button>
                            <button onClick={() => setView('profile')} className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // View: Profile
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 p-1">
                        <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-900">
                            {user.profileImage ? (
                                <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <User size={60} className="text-slate-400" />
                            )}
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{user.fullName}</h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 font-medium">
                            <Mail size={18} />
                            <span>{user.email}</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
                            <button onClick={() => setView('edit')} className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-blue-100">
                                <Edit2 size={18} /> Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Account Information</h3>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    <div className="py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-slate-500 font-medium"><Calendar size={20} className="text-blue-500" /><span>Member Since</span></div>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{user.memberSince}</span>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-slate-500 font-medium"><ShieldCheck size={20} className="text-purple-500" /><span>Account Type</span></div>
                        <span className="px-4 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold rounded-full text-sm">{user.accountType}</span>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-slate-500 font-medium"><Activity size={20} className="text-green-500" /><span>Training Sessions</span></div>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{user.totalSessions} sessions</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;