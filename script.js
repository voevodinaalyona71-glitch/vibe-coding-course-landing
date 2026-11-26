const MAX_CHANNEL_URL = "https://max.ru/se13372587_biz";
const CHANNEL_GUIDE_URL = "https://cloud.mail.ru/public/QHv4/4DvP6k4AT";

document.querySelectorAll("[data-max-channel-link]").forEach((link) => {
  link.href = MAX_CHANNEL_URL;
});

document.querySelectorAll("[data-guide-link]").forEach((link) => {
  link.href = CHANNEL_GUIDE_URL;
});
