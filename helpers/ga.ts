export const pageview = (url: string, title: string) => {
    window.gtag('config', process.env.GOOGLE_ANALYTICS_TRACK_ID, {
        page_location: url,
        page_title: title,
    });
};

export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};