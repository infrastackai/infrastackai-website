import { parseISO, format } from "date-fns";

type Props = {
  dateString: number | string | Date;
};

const DateFormatter = ({ dateString }: Props) => {
  if (typeof dateString === "string") {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL  d, yyyy")}</time>;
  }
  if (typeof dateString === "number") {
    const date = new Date(dateString);
    return (
      <time dateTime={date.toISOString()}>{format(date, "LLLL  d, yyyy")}</time>
    );
  }

  return (
    <time dateTime={dateString.toISOString()}>
      {format(dateString, "LLLL  d, yyyy")}
    </time>
  );
};

export default DateFormatter;
