

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

export function DefaultTable() {
    return (
        <div className="scrollbar-hide h-full w-full overflow-x-auto rounded-xl bg-white shadow-sm border border-slate-200">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-slate-200 bg-slate-50 p-4"
                            >
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    {head}
                                </p>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {TABLE_ROWS.map(({ name, job, date }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-slate-100";

                        return (
                            <tr key={name} className="hover:bg-slate-50/50 transition-colors">
                                <td className={classes}>
                                    <p className="text-sm font-normal text-slate-800">{name}</p>
                                </td>
                                <td className={classes}>
                                    <p className="text-sm font-normal text-slate-600">{job}</p>
                                </td>
                                <td className={classes}>
                                    <p className="text-sm font-normal text-slate-600">{date}</p>
                                </td>
                                <td className={classes}>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-slate-800 hover:text-indigo-600 transition-colors"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DefaultTable;
