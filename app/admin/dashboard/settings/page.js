'use client';

import { useState, useEffect } from 'react';
import { fetchSystemSettings, updateSystemSetting } from '@/app/api/supabaseapi';
import { toast } from 'sonner';
import { FiSettings, FiDollarSign, FiSave } from 'react-icons/fi';

export default function SettingsPage() {
    const [settings, setSettings] = useState({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        async function loadSettings() {
            const { settings: fetchedSettings, error } = await fetchSystemSettings();
            if (error) {
                toast.error("Failed to load settings. Please ensure the system_settings table exists.");
            } else {
                setSettings(fetchedSettings);
            }
            setLoading(false);
        }
        loadSettings();
    }, []);

    const handleUpdateCurrency = async (symbol) => {
        setSaving(true);
        const { error } = await updateSystemSetting('currency_symbol', symbol);
        if (error) {
            toast.error("Failed to update currency");
        } else {
            setSettings(prev => ({ ...prev, currency_symbol: symbol }));
            toast.success(`Currency updated to ${symbol}`);
        }
        setSaving(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-secondary/10 rounded-2xl">
                    <FiSettings className="text-2xl text-secondary" />
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold text-primary tracking-tight">System Settings</h1>
                    <p className="text-slate-500">Manage global application configurations</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Currency Setting Card */}
                <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-blue-100/50 transition-colors"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <FiDollarSign className="text-xl text-blue-600" />
                            <h2 className="text-xl font-bold text-primary">Localization & Currency</h2>
                        </div>

                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Choose the default currency symbol used across the public tracking pages and shipment summaries.
                        </p>

                        <div className="flex gap-4">
                            <CurrencyButton
                                symbol="$"
                                active={settings.currency_symbol === '$'}
                                onClick={() => handleUpdateCurrency('$')}
                                disabled={saving}
                            />
                            <CurrencyButton
                                symbol="£"
                                active={settings.currency_symbol === '£'}
                                onClick={() => handleUpdateCurrency('£')}
                                disabled={saving}
                            />
                            <CurrencyButton
                                symbol="€"
                                active={settings.currency_symbol === '€'}
                                onClick={() => handleUpdateCurrency('€')}
                                disabled={saving}
                            />
                        </div>
                    </div>
                </div>

                {/* Future Settings Placeholder */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-dashed border-slate-200 flex flex-col items-center justify-center text-center opacity-60">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 mb-4">
                        <FiSettings className="text-slate-400 font-bold" />
                    </div>
                    <p className="font-semibold text-slate-500 mb-1">More Settings Coming Soon</p>
                    <p className="text-slate-400 text-xs">Email triggers, SMS alerts, and role permissions.</p>
                </div>
            </div>
        </div>
    );
}

function CurrencyButton({ symbol, active, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex-1 py-4 rounded-2xl font-bold text-2xl transition-all duration-200 border-2 ${active
                    ? 'bg-secondary text-primary-dark border-secondary shadow-lg scale-105'
                    : 'bg-white text-slate-400 border-slate-100 hover:border-secondary/30 hover:text-slate-600'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {symbol}
        </button>
    );
}
