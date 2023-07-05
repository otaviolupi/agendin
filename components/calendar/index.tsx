'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectTrigger,
SelectValue,
} from "@/components/ui/select";
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card";


function sliceIntoChunks(arr, chunkSize) {
const res = [];
for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
}
return res;
}

function showCalendar(month, year) {
debugger;
let date = new Date();

let dayone = new Date(year, month, 1).getDay();

// Get the last date of the month
let lastdate = new Date(year, month + 1, 0).getDate();

// Get the day of the last date of the month
let dayend = new Date(year, month, lastdate).getDay();

// Get the last date of the previous month
let monthlastdate = new Date(year, month, 0).getDate();

// Variable to store the generated calendar HTML
let lit = [];

// Loop to add the last dates of the previous month
for (let i = dayone; i > 0; i--) {
    lit.push({
        date: monthlastdate - i + 1,
        highlight: false
    });
}

// Loop to add the dates of the current month
for (let i = 1; i <= lastdate; i++) {

    // Check if the current date is today
    let isToday = i === date.getDate()
        && month === new Date().getMonth()
        && year === new Date().getFullYear()
        ? "active"
        : "";
    lit.push({
        date: i,
        highlight: isToday
    });
}

// Loop to add the first dates of the next month
for (let i = dayend; i < 6; i++) {
    lit.push({
        date: i - dayend + 1,
        highlight: false
    });
}

return sliceIntoChunks(lit, 7);
}

export function Calendar() {
const [month, setMonth] = useState(6);
const [year, setYear] = useState(2023);
const [calendar, setCalendar] = useState(showCalendar(month, year));
const [weeks, setWeeks] = useState([
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab"
]);
const [months, setMonths] = useState([
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]);

return (
    <React.Fragment>
        <Card>
            <CardHeader>
                <CardTitle>{months[month - 1]} {year}</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="px-24 py-6">
                <div className="flex items-center justify-end">
                    <div className="mx-1">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Selecione um mês" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="1">Janeiro</SelectItem>
                                    <SelectItem value="2">Fevereiro</SelectItem>
                                    <SelectItem value="3">Março</SelectItem>
                                    <SelectItem value="4">Abril</SelectItem>
                                    <SelectItem value="5">Maio</SelectItem>
                                    <SelectItem value="6">Junho</SelectItem>
                                    <SelectItem value="7">Julho</SelectItem>
                                    <SelectItem value="8">Agosto</SelectItem>
                                    <SelectItem value="9">Setembro</SelectItem>
                                    <SelectItem value="10">Outubro</SelectItem>
                                    <SelectItem value="11">Novembro</SelectItem>
                                    <SelectItem value="12">Dezembro</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mx-1">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Selecione um ano" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="2024">2024</SelectItem>
                                    <SelectItem value="2023">2023</SelectItem>
                                    <SelectItem value="2022">2022</SelectItem>
                                    <SelectItem value="2021">2021</SelectItem>
                                    <SelectItem value="2020">2020</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button className="mx-1">Previous</Button>
                    <Button className="mx-1">Next</Button>
                </div>
                <div className="">
                    <div className="flex w-full">
                        {weeks.map((item, index) => (
                            <div className="flex flex-1 justify-center items-center p-6">{item}</div>
                        ))}
                    </div>
                    {calendar.map((item, index) => (
                        <div className="flex">
                            {item.map((day, index) => (
                                <div className="flex flex-1 justify-center items-center p-6">
                                    {day.date}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            </CardContent>
        </Card>     
    </React.Fragment>
);
}