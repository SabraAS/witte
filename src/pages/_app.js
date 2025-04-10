import "@/styles/globals.scss";
import '@/styles/home.scss';
import "@/components/activity/index.scss";
import "@/components/activityAreas/index.scss";
import "@/components/clients/index.scss";
import "@/components/hero/index.scss";
import "@/components/navbar/index.scss";
import "@/components/services/index.scss";
import "@/components/team/index.scss";
import "@/components/teamMember/index.scss";
import "@/components/contact/index.scss";
import "@/components/footer/index.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
