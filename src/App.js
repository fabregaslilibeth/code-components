import './App.css';
import { Banner } from 'components/Banner';
import { PricingCalculator } from 'components/PricingCalculator';
import { CertificationPricing } from 'components/CertificationPricing';
import { PricingDetails } from 'components/PricingDetails';
import { Card } from 'components/card/Card';
import { DeliveryProcess } from './components/process/DeliveryProcess';
import { HowTimeline } from 'components/timeline/HowTimeline';
import { Bento } from 'components/bento/Bento';
import { WhyBentoLight } from 'components/why-bento/WhyBentoLight';
import { WhyBento } from 'components/why-bento/WhyBento';
import { HeaderGroup } from 'components/header-group/HeaderGroup';
import { Grid } from 'components/grid/Grid';
import { GridArray } from 'components/grid-array/GridArray';
import { Slider } from 'components/slider/Slider';
import { CompareCard } from 'components/compare-card/CompareCard';
import { Points } from 'components/points/Points';
import { Marquee } from 'components/marquee/Marquee';
import { Button } from 'components/button/Button';
import { ExpertCta } from 'components/expert-cta/ExpertCta';
import { PillList } from 'components/pill-list/PillList';
import { StatsGrid } from 'components/stats-grid/StatsGrid';
import { NumberedList } from 'components/numbered-list/NumberedList';
import { ServiceList } from 'components/service-list/ServiceList';
import { CtaBanner } from 'components/cta-banner/CtaBanner';

function ComponentSection({ title, children }) {
  return (
    <div className="component-section">
      <div className="component-label">{title}</div>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <ComponentSection title="Banner">
          <Banner />
        </ComponentSection>
        <ComponentSection title="PricingCalculator">
          <PricingCalculator />
        </ComponentSection>
        <ComponentSection title="CertificationPricing">
          <CertificationPricing />
        </ComponentSection>
        <ComponentSection title="PricingDetails">
          <PricingDetails />
        </ComponentSection>
        <ComponentSection title="Card">
          <Card />
        </ComponentSection>
        <ComponentSection title="CtaBanner">
          <CtaBanner />
        </ComponentSection>
        <ComponentSection title="ServiceList">
          <ServiceList />
        </ComponentSection>
        <ComponentSection title="NumberedList">
          <NumberedList />
        </ComponentSection>
        <ComponentSection title="StatsGrid">
          <StatsGrid />
        </ComponentSection>
        <ComponentSection title="PillList">
          <PillList />
        </ComponentSection>
        <ComponentSection title="ExpertCta">
          <ExpertCta />
        </ComponentSection>
        <ComponentSection title="Button">
          <Button />
          <Button theme="dark" label="Get started" icon="arrow-right" />
        </ComponentSection>
        <ComponentSection title="Slider">
          <Slider slides={`[
            {"icon":"clipboard-list","title":"Job & task tracking","body":"Track jobs, tasks and field work in real time, on web and mobile."},
            {"icon":"check-square","title":"Approvals & workflows","body":"Digitise approval workflows with automated routing, reminders and audit trails."},
            {"icon":"list-checks","title":"Checklists & inspections","body":"Replace paper checklists with guided inspection apps that capture photos and sign-off."},
            {"icon":"package-search","title":"Asset & inventory tracking","body":"An asset tracking app for your business — log, scan and locate equipment and stock."},
            {"icon":"table","title":"Replace a spreadsheet with an app","body":"Turn fragile, shared spreadsheets into a secure, multi-user business app."},
            {"icon":"file-text","title":"Digitise paper forms","body":"Move paper forms to mobile apps with validation, e-signatures and instant data."},
            {"icon":"user-plus","title":"Employee onboarding","body":"Streamline onboarding with guided steps, tasks and document capture."},
            {"icon":"wrench","title":"Custom business app","body":"Bespoke low-code apps built around how your business actually works."}
          ]`} />
        </ComponentSection>
        <ComponentSection title="Marquee">
          <Marquee />
        </ComponentSection>
        <ComponentSection title="Points">
          <Points />
        </ComponentSection>
        <ComponentSection title="CompareCard">
          <CompareCard />
        </ComponentSection>
        <ComponentSection title="Grid">
          <Grid />
        </ComponentSection>
        <ComponentSection title="GridArray">
          <GridArray />
        </ComponentSection>
        <ComponentSection title="HeaderGroup">
          <HeaderGroup />
        </ComponentSection>
        <ComponentSection title="WhyBento">
          <WhyBento />
        </ComponentSection>
        <ComponentSection title="WhyBentoLight">
          <WhyBentoLight />
        </ComponentSection>
        <ComponentSection title="HowTimeline">
          <HowTimeline />
        </ComponentSection>
        <ComponentSection title="Bento">
          <Bento />
        </ComponentSection>
        <ComponentSection title="DeliveryProcess">
          <DeliveryProcess />
        </ComponentSection>
      </div>
    </div>
  );
}

export default App;
