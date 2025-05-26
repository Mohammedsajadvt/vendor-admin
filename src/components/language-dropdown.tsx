"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function LanguageDropdown() {
    const [language, setLanguage] = useState<"English" | "لعربية">("English");

    const handleLanguageChange = (lang: "English" | "لعربية") => {
        setLanguage(lang);
        // You can add i18n logic or route changes here if needed
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-24 shadow-none">
                    <span className="text-[#6F767E]">{language}</span>
                    <ChevronDown className="h-4 w-4" />

                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem  onClick={() => handleLanguageChange("English")}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("لعربية")}>
                    العربية
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
