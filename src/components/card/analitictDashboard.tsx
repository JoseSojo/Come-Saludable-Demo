import { FC } from "react";

interface Props {
    title: string;
    ico?: any;
    number: string;
    description: string;
    inverse?: boolean;
}

const AnalititictDashboard: FC<Props> = ({ description, ico, number, title, inverse }) => {

    const bg = inverse ? `bg-green-600` : `bg-white`;
    const textTitle = inverse ? `text-white` : `text-green-600`;
    const text = inverse ? `text-white` : `text-gray-800`;

    return (
        <div className={`stats shadow  p-3 ${bg} rounded-lg`}>
            <div className="stat relative flex items-center justify-between">

                <div>
                    <div className={`text-md font-semibold ${textTitle}`}>{title}</div>
                    <div className={`stat-value text-primary font-black text-3xl ${text}`}>{number}</div>
                    <div className={`text-xs text-light ${text}`}>{description}</div>
                </div>
                <div className={`stat-figure text-primary right-0 m-y-auto ${text}`}>
                    {ico}
                </div>
            </div>
        </div>
    )
}

export default AnalititictDashboard;
