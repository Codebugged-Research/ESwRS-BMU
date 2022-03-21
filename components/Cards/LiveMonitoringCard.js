const LiveMonitoringCard = () => {
  return (
    <div className="live_monitoring">
      <div className="rake_summary">
        <h3>Rake Summary</h3>
        <form>
          <div>
            <label htmlFor="Rake Group">Rake Group</label>
            <input type="text" placeholder="Groups ...." />
          </div>
          <div>
            <label htmlFor="Rake Links">Rake Links</label>
            <input type="text" placeholder="Search ....." />
          </div>
          <div>
            <button>Search Rake</button>
          </div>
        </form>
      </div>
      <div>
        <div className="rake_details">
          <div className="rake_details_header">
            <h2> Rake Details</h2>
            <ul className="rake_color_scheme">
              <li>
                <span className="rake_critial rake_dot">.</span> Critial
              </li>
              <li>
                <span className="rake_normal rake_dot">.</span> Normal
              </li>
              <li>
                <span className="rake_OEM rake_dot">.</span> OEM
              </li>
              <li>
                <span className="rake_conflicts rake_dot">.</span> Conflicts
              </li>
            </ul>
          </div>
          <div className="rake_grid">
            <div className="rake_detail_grid">
              <div>
                <h2>
                  AUGUST KRANTI <span className="live_green">(LIVE)</span>
                  <div>
                    <div className="grid-container-1">
                      <div className="grid-item-1 days">Mon</div>
                      <div className="grid-item-1 days">Tue</div>
                      <div className="grid-item-1 days">Wed</div>
                      <div className="grid-item-1 days">Thr</div>
                      <div className="grid-item-1 days">Fri</div>
                      <div className="grid-item-1 days">Sat</div>
                      <div className="grid-item-1 days">Sun</div>
                    </div>
                  </div>
                </h2>
              </div>
              <div className="rake_color_code">
                <div className="rake_critial">12</div>
                <div className="rake_normal">0</div>
                <div className="rake_OEM">6</div>
                <div className="rake_conflicts">0</div>
              </div>
            </div>
            <div className="rake_detail_grid">
              <div>
                <h2>
                  AUGUST KRANTI <span className="live_green">(LIVE)</span>
                  <div>
                    <div className="grid-container-1">
                      <div className="grid-item-1 days">Mon</div>
                      <div className="grid-item-1 days">Tue</div>
                      <div className="grid-item-1 days">Wed</div>
                      <div className="grid-item-1 days">Thr</div>
                      <div className="grid-item-1 days">Fri</div>
                      <div className="grid-item-1 days">Sat</div>
                      <div className="grid-item-1 days">Sun</div>
                    </div>
                  </div>
                </h2>
              </div>
              <div className="rake_color_code">
                <div className="rake_critial">12</div>
                <div className="rake_normal">0</div>
                <div className="rake_OEM">6</div>
                <div className="rake_conflicts">0</div>
              </div>
            </div>
          </div>
        </div>
        <div className="coach_details">
          <h2>Coach Details</h2>
          <div>
            <div>
              <h3>Coaches</h3>
              <div className="grid-container-1">
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1 coaches_red">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1 coaches_red">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1 coaches_red">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1 coaches_red">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1 coaches_red">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
                <div className="grid-item-1">
                  150024 <span className="coaches_span">4</span>
                </div>
              </div>
            </div>
            <div>
              <h3>Equipment</h3>
              <div className="grid-container-1">
                <div className="grid-item-1 equip_grey">PIS</div>
                <div className="grid-item-1 equip_grey">ETU</div>
                <div className="grid-item-1 equip_grey">FIRE SYSTEM</div>
                <div className="grid-item-1 equip_grey">CCTV</div>
                <div className="grid-item-1 equip_grey">RMPU</div>
                <div className="grid-item-1 equip_grey">TASI</div>
                <div className="grid-item-1 equip_grey">WSPD</div>
                <div className="grid-item-1 equip_grey">OBCMS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoringCard;
