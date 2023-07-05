import { Calendar } from '@/components/calendar';
import { Sidebar } from '@/components/sidebar';

export default function Home() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='mt-[80px] flex-1'>
                <Calendar />
            </div>
        </div>
    )
};