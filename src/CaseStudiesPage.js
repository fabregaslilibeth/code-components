import { CaseStudySpotlight } from 'components/case-study/CaseStudySpotlight';
import { AtAGlance } from 'components/at-a-glance/AtAGlance';
import { TickBox } from 'components/tick-box/TickBox';
import { PullQuote } from 'components/pull-quote/PullQuote';
import { SolutionSteps } from 'components/solution-steps/SolutionSteps';
import { ResultsStats } from 'components/results-stats/ResultsStats';
import { StatBox } from 'components/stat-box/StatBox';
import ComponentSection from './ComponentSection';

function CaseStudiesPage() {
  return (
    <div className="App">
      <div className="app-container">
        <div style={{ padding: '16px 20px 0' }}>
          <a href="/" style={{ fontSize: 13, fontWeight: 600, color: '#0F63F3', textDecoration: 'none' }}>
            ← All components
          </a>
        </div>

        <ComponentSection title="Fashion Retailer — full case study, same layout as Linthouse">
          <div style={{ background: '#070C18', color: 'rgba(221,233,249,.56)', fontFamily: 'Montserrat, sans-serif', padding: '48px 40px' }}>

            {/* Hero — native in the real page */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: '#10C8E5', border: '1px solid rgba(16,200,229,.34)', borderRadius: 999, padding: '6px 13px' }}>Fashion</span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: '#10C8E5', border: '1px solid rgba(16,200,229,.34)', borderRadius: 999, padding: '6px 13px' }}>Penetration Testing</span>
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: '#fff', lineHeight: 1.2, maxWidth: 780, marginTop: 0 }}>
              How Intouch Tech helped a fashion retailer make penetration testing part of its ongoing security strategy
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 680 }}>A fashion company wanted greater confidence that vulnerabilities within its IT environment were being identified before they could develop into more serious security problems.</p>
            <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 680, marginBottom: 40 }}>Intouch Tech introduced regular penetration testing, helping the internal IT team identify weaknesses, prioritise remediation and build repeated security testing into its wider cyber security strategy.</p>

            {/* At a Glance — CC */}
            <AtAGlance
              columns="4,2,1"
              items={[
                { label: 'Industry', value: 'Fashion' },
                { label: 'Company size', value: 'Approximately 50 office-based employees' },
                { label: 'Environment', value: 'Microsoft applications, ERP system and cloud-based BI platform' },
                { label: 'Service', value: 'Penetration testing' },
                { label: 'Objective', value: "Identify unknown vulnerabilities and make penetration testing a regular part of the company's cyber security strategy" },
              ]}
            />

            {/* Challenge — native, no quote (none supplied for this case study) */}
            <div style={{ marginTop: 48, maxWidth: 680 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#10C8E5' }}>The Challenge</p>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>Identifying vulnerabilities before they become security incidents</h2>
              <p>The business wanted to take a preventative approach to cyber security. There had been no major incident or compliance requirement driving the project.</p>
              <p>Instead, the internal IT team wanted to understand whether unknown vulnerabilities existed within the environment and address them before they created a larger problem.</p>
              <p>The company had completed penetration testing previously, but not as frequently as the IT team wanted, so the objective went beyond completing another one-off test — the business wanted a practical way to test its environment more regularly and use the findings to continually improve its security.</p>
            </div>

            {/* Solution — native intro + 4 SolutionSteps CCs (Test / Review / Remediate / Retest) */}
            <div style={{ marginTop: 48 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#10C8E5' }}>The Solution</p>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', maxWidth: 680 }}>Making penetration testing easier to repeat</h2>
              <p style={{ maxWidth: 680 }}>Intouch Tech introduced a more regular penetration testing process that could become part of the company's ongoing security strategy, supporting the business through scoping, planning and implementation to create a straightforward testing workflow.</p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 28 }}>
                <div style={{ width: 220 }}>
                  <SolutionSteps icon="search" title="Test" body="Penetration testing is carried out against the environment to identify potential weaknesses." />
                </div>
                <div style={{ width: 220 }}>
                  <SolutionSteps icon="clipboard-list" title="Review" body="The findings are assessed so the IT team can understand their severity and technical implications." />
                </div>
                <div style={{ width: 220 }}>
                  <SolutionSteps icon="wrench" title="Remediate" body="The business can prioritise the issues that require attention and use the report's recommendations to support remediation." />
                </div>
                <div style={{ width: 220 }}>
                  <SolutionSteps icon="refresh-cw" title="Retest" body="Once issues have been addressed, another test can be scheduled to assess the environment again." />
                </div>
              </div>
            </div>

            {/* Results — native body + a single ResultsStats CC (only one hard number in this case study) */}
            <div style={{ marginTop: 48 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#10C8E5' }}>The Results</p>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', maxWidth: 680 }}>Actionable vulnerabilities identified</h2>
              <p style={{ maxWidth: 680 }}>The penetration testing identified several issues the internal IT team could investigate and remediate, including SMB signing weaknesses, name-service spoofing issues and issues associated with recently installed printers. The printer-related issues were resolved after being highlighted through the test.</p>
              <p style={{ maxWidth: 680, marginBottom: 28 }}>The assessment did not uncover anything considered a major unexpected security concern — instead it gave greater visibility of the environment, with recommendations to help address the areas identified.</p>
              <div style={{ maxWidth: 260 }}>
                <ResultsStats stats={[{ value: '3', label: 'Vulnerability types identified' }]} />
              </div>
            </div>

            {/* Ongoing Impact — native, no quote (none supplied) */}
            <div style={{ marginTop: 48, maxWidth: 680 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#10C8E5' }}>Ongoing Impact</p>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>From occasional testing to continuous improvement</h2>
              <p>The most important outcome is that penetration testing is no longer being treated solely as an occasional exercise. The business is working through the findings and aims to resolve critical and high-priority issues before the next scheduled assessment.</p>
              <p>Once remediation is complete, another test can be carried out to verify the environment again — creating a repeatable cycle: test, identify, remediate, retest.</p>
              <p>For the internal IT team, this provides greater confidence that security weaknesses are being actively identified and addressed rather than remaining hidden between occasional assessments. Penetration testing has now become a regular part of the company's wider security strategy.</p>
            </div>

            {/* Closing CTA — native */}
            <div style={{ marginTop: 48, maxWidth: 640 }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>Make penetration testing part of your security strategy</h2>
              <p>Intouch Tech helps businesses identify vulnerabilities, prioritise remediation and make penetration testing part of a more proactive approach to cyber security. For organisations that want continuous visibility between assessments, Intouch Tech also provides vulnerability scanning to help identify security weaknesses before attackers can exploit them.</p>
              <button type="button" style={{ marginTop: 8, padding: '15px 30px', background: 'transparent', border: '1px solid rgba(125,170,215,.14)', borderRadius: 999, color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', cursor: 'pointer' }}>Talk to Intouch Tech</button>
            </div>

          </div>
        </ComponentSection>

        <ComponentSection title="CaseStudySpotlight (dark)">
          <CaseStudySpotlight />
        </ComponentSection>
        <ComponentSection title="CaseStudySpotlight (light)">
          <CaseStudySpotlight theme="light" />
        </ComponentSection>

        <ComponentSection title="AtAGlance (5 items, default columns 4,2,1 — last box spans full width)">
          <AtAGlance />
        </ComponentSection>
        <ComponentSection title="AtAGlance (7 items, columns 4,3,2,1 — last box spans 2)">
          <AtAGlance
            columns="4,3,2,1"
            items={[
              { label: 'Industry', value: 'Housing' },
              { label: 'Company size', value: 'Approximately 35 colleagues using IT across the office and wider estate' },
              { label: 'Environment', value: 'Microsoft 365, Microsoft Defender and an IT environment supporting office and estate-based users' },
              { label: 'Service', value: 'Penetration testing and email security' },
              { label: 'Objective', value: 'Replace manual security checks with regular automated testing and stronger email protection' },
              { label: 'Timeline', value: 'Testing device shipped next day; first results within hours' },
              { label: 'Support', value: 'Ongoing monthly reporting and remediation reviews' },
            ]}
          />
        </ComponentSection>
        <ComponentSection title="AtAGlance (gap='24px' — uniform col/row)">
          <AtAGlance gap="24px" />
        </ComponentSection>
        <ComponentSection title="AtAGlance (showTicks=false — no corner accents)">
          <AtAGlance showTicks={false} />
        </ComponentSection>

        <ComponentSection title="PullQuote (dark — needs a dark section behind it, like every other dark-theme instance here)">
          <div style={{ background: '#070C18', padding: 32 }}>
            <PullQuote />
            <div style={{ height: 24 }} />
            <PullQuote
              quote="There was no hard sell, and I wasn't bombarded with calls or emails. That was a really refreshing change."
              name="Colin Jones"
              role="ICT Manager, Linthouse Housing Association"
              showMark={false}
            />
          </div>
        </ComponentSection>
        <ComponentSection title="PullQuote (light theme)">
          <PullQuote theme="light" />
        </ComponentSection>

        <ComponentSection title="SolutionSteps (single box, place a few side by side to build a row)">
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ width: 260 }}>
              <SolutionSteps />
            </div>
            <div style={{ width: 260 }}>
              <SolutionSteps
                icon="mail-check"
                title="Stronger email protection"
                body="An additional layer of email protection was introduced alongside the existing Microsoft environment."
              />
            </div>
            <div style={{ width: 260 }}>
              <SolutionSteps
                icon="list-checks"
                title="Clear remediation priorities"
                body="Findings were added to an action list, prioritised by severity, with subsequent reports confirming each fix."
              />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection title="ResultsStats (5 stats, default columns 4,2,1 — last box spans full width)">
          <ResultsStats />
        </ComponentSection>

        <ComponentSection title="StatBox">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 180 }}>
              <StatBox />
            </div>
            <div style={{ width: 180 }}>
              <StatBox value="197" label="Malicious emails quarantined in 30 days" />
            </div>
            <div style={{ width: 180 }}>
              <StatBox value="0" label="Hours of downtime" showTicks={false} theme="light" />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection title="TickBox (fills 100% width/height — all three match the tallest, despite very different content length)">
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 16, height: 220 }}>
            <div style={{ width: 220 }}>
              <TickBox label="Industry" value="Housing" />
            </div>
            <div style={{ width: 220 }}>
              <TickBox label="Service" value="Penetration testing and email security" />
            </div>
            <div style={{ width: 220 }}>
              <TickBox label="Objective" value="Replace manual security checks with regular automated testing, strengthen email protection and create a clearer process for identifying and remediating cyber security weaknesses" />
            </div>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}

export default CaseStudiesPage;
