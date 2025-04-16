import { FC, ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode
}

const LayoutChart: FC<Props> = ({ children,title }) => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-gray-600">{title}</h2>
            { children }
        </div>
    )
}

export default LayoutChart;
