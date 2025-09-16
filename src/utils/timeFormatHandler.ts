export function formatDateToLongDate(isoDate: string): string {
    const date = new Date(isoDate);
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    const month = date.toLocaleString("en-GB", {
        month: "long",
        timeZone: "UTC",
    });

    return `${day} ${month} ${year}`;
}

export const formatDateForInput = (isoString?: string | null) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

export const formatDateTime = (dateString: string | Date) => {
    if (!dateString) return "N/A";

    const date = new Date(dateString);

    return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};
