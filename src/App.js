import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaHome,
  FaUsers,
  FaTools,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaImage,
  FaShareAlt,
  FaFileExport,
  FaHistory,
  FaFileInvoice,
  FaLeaf,
  FaBuilding,
  FaExclamationTriangle,
  FaChartLine,
  FaFileAlt,
  FaCalendarCheck,
  FaEnvelope,
  FaLink,
  FaCalculator,
  FaCheckCircle,
  FaShieldAlt,
  FaSearch,
} from "react-icons/fa";

// --- DUMMY DATA ---
const chartData = [
  { name: "Jan", kWh: 400 },
  { name: "Feb", kWh: 300 },
  { name: "Mar", kWh: 600 },
  { name: "Apr", kWh: 800 },
  { name: "May", kWh: 700 },
  { name: "Jun", kWh: 950 },
];

// --- GENERIC STYLED COMPONENTS ---

const GlassCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  padding: 2rem;
  text-align: left;
  height: 100%;
`;
const Section = styled.section`
  padding: 6rem 8%;
  text-align: center;
  h1,
  h2 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  > p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto 3rem auto;
  }
`;
const GradientButton = styled.button`
  background: linear-gradient(90deg, var(--accent-pink), var(--accent-purple));
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #e734a744;
  }
  &.green {
    background: linear-gradient(90deg, var(--accent-green), var(--accent-blue));
    &:hover {
      box-shadow: 0 0 20px #23f2a844;
    }
  }
`;
const GhostButton = styled(GradientButton)`
  background: transparent;
  border: 2px solid var(--glass-border);
  color: var(--text-primary);
  &:hover {
    background: var(--glass-border);
    box-shadow: none;
  }
`;

// --- HEADER, FOOTER, FAB ---

const Header = () => {
  const Nav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 8%;
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(17, 19, 21, 0.8);
    backdrop-filter: blur(15px);
  `;
  const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-primary);
    text-decoration: none;
  `;
  const NavLinks = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;
    a {
      /* This is now the <Link> component */
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      &:hover {
        color: var(--text-primary);
      }
    }
  `;
  return (
    <Nav>
      <Logo to="/">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/512/742/original/logo-ecological-solar-energy-vector-illustration.jpg"
          alt="logo"
          style={{ width: "32px" }}
        />
        <span className="animated-gradient-text">SOLAR AI</span>
      </Logo>
      <NavLinks>
        <Link to="/">
          <FaHome /> Home
        </Link>
        <Link to="/community">
          <FaUsers /> Community
        </Link>
        <Link to="/tools">
          <FaTools /> Advanced Tools
        </Link>
        <Link to="/profile">
          <FaUserCircle /> Profile
        </Link>
      </NavLinks>
      <GradientButton>Get Started</GradientButton>
    </Nav>
  );
};
const FloatingActionButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(90deg, var(--accent-pink), var(--accent-purple));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 99;
`;
const Footer = () => {
  const FooterContainer = styled.footer`
    padding: 4rem 8% 2rem 8%;
    border-top: 1px solid var(--glass-border);
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
    text-align: left;
  `;
  const Column = styled.div`
    h4 {
      margin-bottom: 1rem;
    }
    a,
    p {
      color: var(--text-secondary);
      text-decoration: none;
      display: block;
      margin-bottom: 0.5rem;
    }
    a:hover {
      color: var(--text-primary);
    }
  `;
  return (
    <FooterContainer>
      <Column>
        <h4>SOLAR AI</h4>
        <p>
          Empowering communities with AI-driven solar energy insights and
          predictions.
        </p>
      </Column>
      <Column>
        <h4>Product</h4>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">API</a>
        <a href="#">Documentation</a>
      </Column>
      <Column>
        <h4>Company</h4>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </Column>
      <Column>
        <h4>Resources</h4>
        <a href="#">Help Center</a>
        <a href="#">Community</a>
        <a href="#">Guides</a>
        <a href="#">Status</a>
      </Column>
    </FooterContainer>
  );
};

// --- FEATURE SECTIONS (UNCHANGED) ---

const HeroSection = () => {
  const StatCard = styled(GlassCard)`
    padding: 1.5rem;
    text-align: center;
    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--accent-green);
    }
    p {
      color: var(--text-secondary);
    }
  `;
  return (
    <Section>
      <h1>
        <span className="animated-gradient-text">
          Predict Solar Future with AI Precision
        </span>{" "}
        <br />
      </h1>
      <p>
        Harness the power of geospatial analysis and machine learning to assess
        solar energy viability, predict degradation, and maximize your renewable
        investment.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "4rem",
        }}
      >
        <GradientButton className="green">Start Analysis</GradientButton>
        <GhostButton>Learn More</GhostButton>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
      >
        <StatCard>
          <h3>50K+</h3>
          <p>Predictions</p>
        </StatCard>
        <StatCard>
          <h3>94%</h3>
          <p>Accuracy</p>
        </StatCard>
        <StatCard>
          <h3>200+</h3>
          <p>Communities</p>
        </StatCard>
        <StatCard>
          <h3>$2M+</h3>
          <p>Saved</p>
        </StatCard>
      </div>
    </Section>
  );
};
const ExplorerSection = () => {
  const ExplorerGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    text-align: left;
  `;
  const MapContainer = styled(GlassCard)`
    padding: 0;
    overflow: hidden;
    background: url("https://coolwallpapers.me/picsup/3107148-andhra-pradesh_dark-green_golden-sun_india.jpg")
      no-repeat center center;
    background-size: cover;
    min-height: 500px;
  `;
  const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `;
  const ControlCard = styled(GlassCard)`
    h4 {
      margin-bottom: 1.5rem;
    }
  `;
  const SliderContainer = styled.div`
    margin-bottom: 1.5rem;
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    .slider-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .slider-wrapper span {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    input[type="range"] {
      flex: 1;
    }
  `;
  const QuickActionsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      background: var(--glass-border);
      border: none;
      color: var(--text-secondary);
      padding: 1rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        color: var(--text-primary);
      }
    }
  `;
  const SearchGroup = styled.div`
    position: relative;
    margin-bottom: 1rem;
    .icon {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      color: var(--text-secondary);
    }
    input {
      width: 100%;
      padding: 0.75rem 0.75rem 0.75rem 3rem;
      border-radius: 8px;
      border: 1px solid var(--glass-border);
      background: rgba(0, 0, 0, 0.2);
      color: var(--text-primary);
      font-size: 1rem;
    }
  `;
  return (
    <Section>
      <h2>
        <span className="animated-gradient-text">Solar Potential Explorer</span>
      </h2>
      <p>
        Discover optimal solar installation locations with real-time geospatial
        analysis and AI-powered predictions.
      </p>
      <ExplorerGrid>
        <MapContainer />
        <Sidebar>
          <ControlCard>
            <h4>Location Settings</h4>
            <SearchGroup>
              <FaSearch className="icon" />
              <input
                type="text"
                placeholder="Search Location"
                defaultValue="San Francisco, CA"
              />
            </SearchGroup>
            <GradientButton style={{ width: "100%" }}>
              <FaMapMarkerAlt /> Use Current Location
            </GradientButton>
          </ControlCard>
          <ControlCard>
            <h4>Analysis Parameters</h4>
            <SliderContainer>
              <label>Rooftop Area (m²)</label>
              <div className="slider-wrapper">
                <span>10</span>
                <input type="range" min="10" max="1000" defaultValue="300" />
                <span>1000</span>
              </div>
            </SliderContainer>
            <SliderContainer>
              <label>Panel Efficiency (%)</label>
              <div className="slider-wrapper">
                <span>15%</span>
                <input type="range" min="15" max="25" defaultValue="20" />
                <span>25%</span>
              </div>
            </SliderContainer>
            <label>Analysis Years</label>
            <select
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid var(--glass-border)",
                background: "var(--card-bg)",
                color: "var(--text-primary)",
              }}
            >
              <option>10 Years</option>
              <option>15 Years</option>
              <option>25 Years</option>
            </select>
          </ControlCard>
          <ControlCard>
            <h4>Quick Actions</h4>
            <QuickActionsGrid>
              <button>
                <FaImage size="1.5em" /> Upload Image
              </button>
              <button>
                <FaShareAlt size="1.5em" /> Share Results
              </button>
              <button>
                <FaFileExport size="1.5em" /> Export Data
              </button>
              <button>
                <FaHistory size="1.5em" /> View History
              </button>
            </QuickActionsGrid>
          </ControlCard>
        </Sidebar>
      </ExplorerGrid>
    </Section>
  );
};
const AIPoweredCalculator = () => {
  const CalculatorGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.2fr;
    gap: 2rem;
    align-items: stretch;
  `;
  const ConfigCard = styled(GlassCard)`
    display: flex;
    flex-direction: column;
    h4 {
      margin-bottom: 1.5rem;
    }
  `;
  const Tabs = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    button {
      padding: 0.75rem 1.5rem;
      border: 1px solid var(--glass-border);
      border-radius: 50px;
      background: transparent;
      color: var(--text-secondary);
      cursor: pointer;
      &.active {
        background: var(--accent-green);
        color: #111;
        border-color: var(--accent-green);
      }
    }
  `;
  const FormGroup = styled.div`
    margin-bottom: 1.5rem;
    text-align: left;
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    input,
    select {
      width: 100%;
      padding: 0.75rem;
      border-radius: 8px;
      border: 1px solid var(--glass-border);
      background: rgba(0, 0, 0, 0.2);
      color: var(--text-primary);
      font-size: 1rem;
    }
  `;
  const StatusCard = styled(GlassCard)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      color: var(--accent-purple);
    }
    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  `;
  return (
    <Section>
      <h2>
        {" "}
        <span className="animated-gradient-text">
          {" "}
          AI-Powered Solar Calculator
        </span>
      </h2>
      <p>
        Get precise solar predictions using advanced machine learning algorithms
        and real-time environmental data.
      </p>
      <CalculatorGrid>
        <ConfigCard>
          <h4>System Configuration</h4>
          <Tabs>
            <button className="active">System</button>
            <button>Location</button>
            <button>Financial</button>
          </Tabs>
          <FormGroup>
            <label>Roof Orientation</label>
            <select>
              <option>South (Optimal)</option>
              <option>East</option>
              <option>West</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Roof Angle: 30°</label>
            <input type="range" min="10" max="60" defaultValue="30" />
          </FormGroup>
          <FormGroup>
            <label>Shading Factor: 10%</label>
            <input type="range" min="0" max="100" defaultValue="10" />
          </FormGroup>
          <GradientButton style={{ marginTop: "auto" }}>
            Calculate Solar Potential
          </GradientButton>
        </ConfigCard>
        <StatusCard>
          <div className="icon">
            <FaCalculator />
          </div>
          <h4>Ready for Analysis</h4>
          <p>
            Configure your system parameters and click calculate to get
            AI-powered solar predictions with 94% accuracy.
          </p>
        </StatusCard>
      </CalculatorGrid>
    </Section>
  );
};
const CommunityDashboard = () => {
  const DashboardGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  `;
  const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `;
  const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `;
  const TwoColGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  `;
  const PerformanceCard = styled(GlassCard)`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    .toggle-group button {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      cursor: pointer;
      &.active {
        background: var(--text-primary);
        color: #111;
      }
    }
    .overview {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin-bottom: 2rem;
    }
    .stat h3 {
      font-size: 2.5rem;
    }
    .stat p {
      color: var(--text-secondary);
    }
    .stat .change {
      color: var(--accent-green);
      font-size: 0.9rem;
    }
  `;
  const RegionsCard = styled(GlassCard)`
    h4 {
      margin-bottom: 1.5rem;
    }
    .region {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .value {
      color: var(--text-primary);
      font-weight: 500;
    }
  `;
  const ImpactCard = styled(GlassCard)`
    h4 {
      margin-bottom: 1.5rem;
    }
    .impact-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .reduction {
      text-align: center;
      margin-top: 1.5rem;
    }
    .reduction h3 {
      font-size: 2rem;
      color: var(--accent-green);
    }
  `;
  const InsightCard = styled(GlassCard)`
    h4 {
      margin-bottom: 1rem;
    }
    .insight {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .icon {
      font-size: 1.2rem;
      color: var(--accent-green);
      margin-top: 5px;
    }
    h5 {
      margin: 0 0 0.25rem 0;
    }
    p {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
  `;
  const AchievementsGrid = styled(GlassCard)`
    h4 {
      margin-bottom: 1.5rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    .achievement {
      text-align: center;
    }
    .achievement .icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: var(--accent-green);
    }
    p.value {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
  `;
  const QuickActionsCard = styled(GlassCard)`
    h4 {
      margin-bottom: 1.5rem;
    }
    button {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--glass-border);
      border: none;
      color: var(--text-secondary);
      padding: 1rem;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 1rem;
      font-size: 1rem;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        color: var(--text-primary);
      }
    }
  `;
  return (
    <Section>
      <h2>
        <span className="animated-gradient-text">Community Dashboard</span>
      </h2>
      <p>
        Track solar adoption, monitor performance, and discover insights across
        your community.
      </p>
      <DashboardGrid>
        <MainContent>
          <PerformanceCard>
            <div className="header">
              <h4>Performance Overview</h4>
              <div className="toggle-group">
                <button className="active">24H</button>
                <button>7D</button>
                <button>30D</button>
              </div>
            </div>
            <div className="overview">
              <div className="stat">
                <h3>2.4 GWh</h3>
                <p>Total Generation</p>
                <span className="change">+12% vs last month</span>
              </div>
              <div className="stat">
                <h3>1,247</h3>
                <p>Active Systems</p>
                <span className="change">+8% vs last month</span>
              </div>
              <div className="stat">
                <h3>18.3%</h3>
                <p>Avg Efficiency</p>
                <span className="change">+2.1% vs last month</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--glass-border)"
                />
                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--glass-border)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="kWh"
                  stroke="var(--chart-line-color)"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </PerformanceCard>
          <TwoColGrid>
            <RegionsCard>
              <h4>Top Performing Regions</h4>
              <div className="region">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    className="dot"
                    style={{ background: "var(--accent-purple)" }}
                  />{" "}
                  Mission District
                </div>{" "}
                <span className="value">142 kWh</span>
              </div>
              <div className="region">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    className="dot"
                    style={{ background: "var(--accent-green)" }}
                  />{" "}
                  SOMA
                </div>{" "}
                <span className="value">128 kWh</span>
              </div>
              <div className="region">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    className="dot"
                    style={{ background: "var(--accent-pink)" }}
                  />{" "}
                  Richmond
                </div>{" "}
                <span className="value">115 kWh</span>
              </div>
            </RegionsCard>
            <ImpactCard>
              <h4>Environmental Impact</h4>
              <div className="impact-item">
                <span>CO₂ Avoided</span>
                <span className="value">1,847 tons</span>
              </div>
              <div className="impact-item">
                <span>Trees Equivalent</span>
                <span className="value">42,384</span>
              </div>
              <div className="impact-item">
                <span>Homes Powered</span>
                <span className="value">324</span>
              </div>
              <div className="reduction">
                <h3>-23%</h3>
                <p>Carbon footprint reduction</p>
              </div>
            </ImpactCard>
          </TwoColGrid>
        </MainContent>
        <Sidebar>
          <InsightCard>
            <h4>AI Insights</h4>
            <div className="insight">
              <FaLeaf className="icon" />
              <div>
                <h5>Optimization Opportunity</h5>
                <p>
                  15% efficiency gain possible with panel cleaning in Sunset
                  District.
                </p>
              </div>
            </div>
            <div className="insight">
              <FaExclamationTriangle
                className="icon"
                style={{ color: "#f2c94c" }}
              />
              <div>
                <h5>Weather Alert</h5>
                <p>
                  Clear skies predicted for next 5 days - expect 20% higher
                  generation.
                </p>
              </div>
            </div>
            <div className="insight">
              <FaTools className="icon" style={{ color: "#e734a7" }} />
              <div>
                <h5>Maintenance Due</h5>
                <p>42 systems require inspection this month.</p>
              </div>
            </div>
          </InsightCard>
          <AchievementsGrid>
            <h4>Community Achievements</h4>
            <div className="grid">
              <div className="achievement">
                <div className="icon">
                  <FaFileInvoice />
                </div>
                <p>Green Pioneer</p>
                <p className="value">1000+ kWh</p>
              </div>
              <div className="achievement">
                <div className="icon">
                  <FaShieldAlt />
                </div>
                <p>Power Master</p>
                <p className="value">98% Uptime</p>
              </div>
              <div className="achievement">
                <div className="icon">
                  <FaUsers />
                </div>
                <p>Community Leader</p>
                <p className="value">50+ Referrals</p>
              </div>
              <div className="achievement">
                <div className="icon">
                  <FaBuilding />
                </div>
                <p>Efficiency Expert</p>
                <p className="value">20%+ Efficiency</p>
              </div>
            </div>
          </AchievementsGrid>
          <QuickActionsCard>
            <h4>Quick Actions</h4>
            <button>
              <FaFileAlt /> Generate Community Report
            </button>
            <button>
              <FaCalendarCheck /> Schedule Maintenance
            </button>
          </QuickActionsCard>
        </Sidebar>
      </DashboardGrid>
    </Section>
  );
};
const SmartReportsSection = () => {
  const ReportsGrid = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2rem;
  `;
  const ReportTypeCard = styled(GlassCard)`
    flex-direction: row;
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    .icon {
      font-size: 2rem;
      padding: 1rem;
      border-radius: 12px;
      background: var(--glass-border);
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
    .meta {
      display: flex;
      gap: 1rem;
      font-size: 0.8rem;
      color: var(--accent-green);
      margin-top: 0.5rem;
    }
  `;
  const ReportPreviewer = styled(GlassCard)`
    h4 {
      margin-bottom: 1.5rem;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    input,
    select {
      width: 100%;
      padding: 0.75rem;
      border-radius: 8px;
      border: 1px solid var(--glass-border);
      background: rgba(0, 0, 0, 0.2);
      color: var(--text-primary);
    }
  `;
  const CheckboxGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `;
  return (
    <Section>
      <h2>
        <span className="animated-gradient-text">Smart Reports</span>
      </h2>
      <p>
        Generate professional reports for stakeholders, investors, and community
        leaders.
      </p>
      <ReportsGrid>
        <div>
          <h4>Choose Report Type</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <ReportTypeCard>
              <img
                src="https://th.bing.com/th/id/OIP.4xvuQJDbSfbmmXK3ShJkAAHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="logo"
                style={{ width: "32px" }}
              />
              <div>
                <h4>Community Solar Assessment</h4>
                <p>
                  Comprehensive analysis of solar potential across your
                  community.
                </p>
                <div className="meta">
                  <span>● 5 min generation</span>
                  <span>15-20 pages</span>
                </div>
              </div>
            </ReportTypeCard>
            <ReportTypeCard>
              <img
                src="https://cdn2.iconfinder.com/data/icons/business-line-color-bg-strawberry-economy/512/investment-1024.png"
                alt="logo"
                style={{ width: "32px" }}
              />
              <div>
                <h4>Financial ROI Analysis</h4>
                <p>
                  Detailed cost-benefit analysis with payback periods and
                  incentives.
                </p>
                <div className="meta">
                  <span>● 3 min generation</span>
                  <span>8-12 pages</span>
                </div>
              </div>
            </ReportTypeCard>
            <ReportTypeCard>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/biofuel-extraction-2791789-2319873.png"
                alt="logo"
                style={{ width: "32px" }}
              />
              <div>
                <h4>Environmental Impact Report</h4>
                <p>
                  Carbon footprint reduction and other sustainability metrics.
                </p>
                <div className="meta">
                  <span>● 4 min generation</span>
                  <span>10-15 pages</span>
                </div>
              </div>
            </ReportTypeCard>
            <ReportTypeCard>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6656/6656154.png"
                alt="logo"
                style={{ width: "32px" }}
              />
              <div>
                <h4>Stakeholder Presentation</h4>
                <p>
                  Executive summary with key findings, visual charts, and
                  recommendations.
                </p>
                <div className="meta">
                  <span>● 2 min generation</span>
                  <span>5-8 pages</span>
                </div>
              </div>
            </ReportTypeCard>
          </div>
        </div>
        <ReportPreviewer>
          <div className="form-group">
            <label>Report Title</label>
            <input
              type="text"
              defaultValue="San Francisco Solar Initiative 2024"
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input type="text" defaultValue="City Planning Department" />
          </div>
          <div className="form-group">
            <label>Include Sections</label>
            <CheckboxGroup>
              <label>
                <input type="checkbox" defaultChecked /> Executive Summary
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Solar Maps
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Financial Analysis
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Technical Details
              </label>
            </CheckboxGroup>
          </div>
          <h4 style={{ marginTop: "2rem" }}>Generate & Share</h4>
          <GradientButton className="green" style={{ width: "100%" }}>
            Generate AI Report
          </GradientButton>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <GhostButton style={{ width: "100%" }}>
              <FaEnvelope /> Email Report
            </GhostButton>
            <GhostButton style={{ width: "100%" }}>
              <FaLink /> Share Link
            </GhostButton>
          </div>
        </ReportPreviewer>
      </ReportsGrid>
    </Section>
  );
};

// --- NEW PAGE COMPONENTS ---

const HomePage = () => (
  <>
    <HeroSection />
    <ExplorerSection />
    <AIPoweredCalculator />
    <CommunityDashboard />
    <SmartReportsSection />
  </>
);

const ProfilePage = () => (
  <Section>
    <h1>
      <span className="animated-gradient-text">User Profile</span>
    </h1>
    <GlassCard
      style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}
    >
      <FaUserCircle size="5em" style={{ marginBottom: "1rem" }} />
      <h2>EcoWarrior22</h2>
      <p>
        This is where the user's profile, achievements, and saved reports would
        be displayed.
      </p>
    </GlassCard>
  </Section>
);

// --- MAIN APP ROUTER ---
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/community" element={<CommunityDashboard />} />
          <Route path="/tools" element={<AIPoweredCalculator />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActionButton>
        <FaPlus />
      </FloatingActionButton>
    </>
  );
}
