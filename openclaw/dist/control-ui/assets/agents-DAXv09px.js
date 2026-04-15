import{r as p,a as M,b as E,n as H,c as Y,A as a,d as i,e as K,p as O,i as N,o as Q,t as V,f as z,g as X,h as U,j as Z,k as ee,l as le,m as te,q as ne,s as ie,u as se,v as B,w as R,x as ae,y as _,z as j}from"./index-ZjeCnFNw.js";import{r as oe}from"./channel-config-extras-BkKp7v9q.js";import{g as de,c as ce,a as ge,r as re}from"./skills-shared-Bg15OG1J.js";function ve(e){const{agent:n,configForm:t,agentFilesList:s,configLoading:l,configSaving:g,configDirty:u,onConfigReload:$,onConfigSave:o,onModelChange:d,onModelFallbacksChange:h,onSelectPanel:A}=e,v=p(t,n.id),L=(s&&s.agentId===n.id?s.workspace:null)||v.entry?.workspace||v.defaults?.workspace||"default",F=v.entry?.model?M(v.entry?.model):M(v.defaults?.model),T=M(v.defaults?.model),D=E(v.entry?.model),x=E(v.defaults?.model)||(T!=="-"?H(T):null),c=D??x??null,b=Y(v.entry?.model)??[],r=Array.isArray(v.entry?.skills)?v.entry?.skills:null,I=r?.length??null,m=!!(e.defaultId&&n.id===e.defaultId),w=!t||l||g,G=k=>{const C=b.filter((S,q)=>q!==k);h(n.id,C)},J=k=>{const C=k.target;if(k.key==="Enter"||k.key===","){k.preventDefault();const S=O(C.value);S.length>0&&(h(n.id,[...b,...S]),C.value="")}};return i`
    <section class="card">
      <div class="card-title">Overview</div>
      <div class="card-sub">Workspace paths and identity metadata.</div>

      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div>
            <button
              type="button"
              class="workspace-link mono"
              @click=${()=>A("files")}
              title="Open Files tab"
            >${L}</button>
          </div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${F}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${r?`${I} selected`:"all skills"}</div>
        </div>
      </div>

      ${u?i`
              <div class="callout warn" style="margin-top: 16px">You have unsaved config changes.</div>
            `:a}

      <div class="agent-model-select" style="margin-top: 20px;">
        <div class="label">Model Selection</div>
        <div class="agent-model-fields">
          <label class="field">
            <span>Primary model${m?" (default)":""}</span>
            <select
              .value=${m?c??"":D??""}
              ?disabled=${w}
              @change=${k=>d(n.id,k.target.value||null)}
            >
              ${m?a:i`
                      <option value="">
                        ${x?`Inherit default (${x})`:"Inherit default"}
                      </option>
                    `}
              ${K(t,c??void 0)}
            </select>
          </label>
          <div class="field">
            <span>Fallbacks</span>
            <div class="agent-chip-input" @click=${k=>{const S=k.currentTarget.querySelector("input");S&&S.focus()}}>
              ${b.map((k,C)=>i`
                  <span class="chip">
                    ${k}
                    <button
                      type="button"
                      class="chip-remove"
                      ?disabled=${w}
                      @click=${()=>G(C)}
                    >&times;</button>
                  </span>
                `)}
              <input
                ?disabled=${w}
                placeholder=${b.length===0?"provider/model":""}
                @keydown=${J}
                @blur=${k=>{const C=k.target,S=O(C.value);S.length>0&&(h(n.id,[...b,...S]),C.value="")}}
              />
            </div>
          </div>
        </div>
        <div class="agent-model-actions">
          <button type="button" class="btn btn--sm" ?disabled=${l} @click=${$}>
            Reload Config
          </button>
          <button
            type="button"
            class="btn btn--sm primary"
            ?disabled=${g||!u}
            @click=${o}
          >
            ${g?"Saving…":"Save"}
          </button>
        </div>
      </div>
    </section>
  `}function W(e,n){return i`
    <section class="card">
      <div class="card-title">Agent Context</div>
      <div class="card-sub">${n}</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${e.workspace}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${e.model}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${e.identityName}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Avatar</div>
          <div>${e.identityAvatar}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${e.skillsLabel}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${e.isDefault?"yes":"no"}</div>
        </div>
      </div>
    </section>
  `}function ue(e,n){const t=e.channelMeta?.find(s=>s.id===n);return t?.label?t.label:e.channelLabels?.[n]??n}function fe(e){if(!e)return[];const n=new Set;for(const l of e.channelOrder??[])n.add(l);for(const l of e.channelMeta??[])n.add(l.id);for(const l of Object.keys(e.channelAccounts??{}))n.add(l);const t=[],s=e.channelOrder?.length?e.channelOrder:Array.from(n);for(const l of s)n.has(l)&&(t.push(l),n.delete(l));for(const l of n)t.push(l);return t.map(l=>({id:l,label:ue(e,l),accounts:e.channelAccounts?.[l]??[]}))}const be=["groupPolicy","streamMode","dmPolicy"];function $e(e){let n=0,t=0,s=0;for(const l of e){const g=l.probe&&typeof l.probe=="object"&&"ok"in l.probe?!!l.probe.ok:!1;(l.connected===!0||l.running===!0||g)&&(n+=1),l.configured&&(t+=1),l.enabled&&(s+=1)}return{total:e.length,connected:n,configured:t,enabled:s}}function he(e){const n=fe(e.snapshot),t=e.lastSuccess?z(e.lastSuccess):"never";return i`
    <section class="grid grid-cols-2">
      ${W(e.context,"Workspace, identity, and model configuration.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Channels</div>
            <div class="card-sub">Gateway-wide channel status snapshot.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="muted" style="margin-top: 8px;">
          Last refresh: ${t}
        </div>
        ${e.error?i`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:a}
        ${e.snapshot?a:i`
                <div class="callout info" style="margin-top: 12px">Load channels to see live status.</div>
              `}
        ${n.length===0?i`
                <div class="muted" style="margin-top: 16px">No channels found.</div>
              `:i`
                <div class="list" style="margin-top: 16px;">
                  ${n.map(s=>{const l=$e(s.accounts),g=l.total?`${l.connected}/${l.total} connected`:"no accounts",u=l.configured?`${l.configured} configured`:"not configured",$=l.total?`${l.enabled} enabled`:"disabled",o=oe({configForm:e.configForm,channelId:s.id,fields:be});return i`
                      <div class="list-item">
                        <div class="list-main">
                          <div class="list-title">${s.label}</div>
                          <div class="list-sub mono">${s.id}</div>
                        </div>
                        <div class="list-meta">
                          <div>${g}</div>
                          <div>${u}</div>
                          <div>${$}</div>
                          ${l.configured===0?i`
                                  <div>
                                    <a
                                      href="https://docs.openclaw.ai/channels"
                                      target="_blank"
                                      rel="noopener"
                                      style="color: var(--accent); font-size: 12px"
                                      >Setup guide</a
                                    >
                                  </div>
                                `:a}
                          ${o.length>0?o.map(d=>i`<div>${d.label}: ${d.value}</div>`):a}
                        </div>
                      </div>
                    `})}
                </div>
              `}
      </section>
    </section>
  `}function ye(e){const n=e.jobs.filter(t=>t.agentId===e.agentId);return i`
    <section class="grid grid-cols-2">
      ${W(e.context,"Workspace and scheduling targets.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Scheduler</div>
            <div class="card-sub">Gateway cron status.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${X(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${e.error?i`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:a}
      </section>
    </section>
    <section class="card">
      <div class="card-title">Agent Cron Jobs</div>
      <div class="card-sub">Scheduled jobs targeting this agent.</div>
      ${n.length===0?i`
              <div class="muted" style="margin-top: 16px">No jobs assigned.</div>
            `:i`
              <div class="list" style="margin-top: 16px;">
                ${n.map(t=>i`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${t.name}</div>
                        ${t.description?i`<div class="list-sub">${t.description}</div>`:a}
                        <div class="chip-row" style="margin-top: 6px;">
                          <span class="chip">${U(t)}</span>
                          <span class="chip ${t.enabled?"chip-ok":"chip-warn"}">
                            ${t.enabled?"enabled":"disabled"}
                          </span>
                          <span class="chip">${t.sessionTarget}</span>
                        </div>
                      </div>
                      <div class="list-meta">
                        <div class="mono">${Z(t)}</div>
                        <div class="muted">${ee(t)}</div>
                        <button
                          class="btn btn--sm"
                          style="margin-top: 6px;"
                          ?disabled=${!t.enabled}
                          @click=${()=>e.onRunNow(t.id)}
                        >Run Now</button>
                      </div>
                    </div>
                  `)}
              </div>
            `}
    </section>
  `}function ke(e){const n=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,t=n?.files??[],s=e.agentFileActive??null,l=s?t.find(o=>o.name===s)??null:null,g=s?e.agentFileContents[s]??"":"",u=s?e.agentFileDrafts[s]??g:"",$=s?u!==g:!1;return i`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Core Files</div>
          <div class="card-sub">Bootstrap persona, identity, and tool guidance.</div>
        </div>
        <button
          class="btn btn--sm"
          ?disabled=${e.agentFilesLoading}
          @click=${()=>e.onLoadFiles(e.agentId)}
        >
          ${e.agentFilesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${n?i`<div class="muted mono" style="margin-top: 8px;">Workspace: ${n.workspace}</div>`:a}
      ${e.agentFilesError?i`<div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}</div>`:a}
      ${n?i`
              <div class="agent-files-grid" style="margin-top: 16px;">
                <div class="agent-files-list">
                  ${t.length===0?i`
                          <div class="muted">No files found.</div>
                        `:t.map(o=>me(o,s,()=>e.onSelectFile(o.name)))}
                </div>
                <div class="agent-files-editor">
                  ${l?i`
                          <div class="agent-file-header">
                            <div>
                              <div class="agent-file-title mono">${l.name}</div>
                              <div class="agent-file-sub mono">${l.path}</div>
                            </div>
                            <div class="agent-file-actions">
                              <button
                                class="btn btn--sm"
                                title="Preview rendered markdown"
                                @click=${o=>{const h=o.currentTarget.closest(".agent-files-editor")?.querySelector("dialog");h&&h.showModal()}}
                              >
                                ${N.eye} Preview
                              </button>
                              <button
                                class="btn btn--sm"
                                ?disabled=${!$}
                                @click=${()=>e.onFileReset(l.name)}
                              >
                                Reset
                              </button>
                              <button
                                class="btn btn--sm primary"
                                ?disabled=${e.agentFileSaving||!$}
                                @click=${()=>e.onFileSave(l.name)}
                              >
                                ${e.agentFileSaving?"Saving…":"Save"}
                              </button>
                            </div>
                          </div>
                          ${l.missing?i`
                                  <div class="callout info" style="margin-top: 10px">
                                    This file is missing. Saving will create it in the agent workspace.
                                  </div>
                                `:a}
                          <label class="field agent-file-field" style="margin-top: 12px;">
                            <span>Content</span>
                            <textarea
                              class="agent-file-textarea"
                              .value=${u}
                              @input=${o=>e.onFileDraftChange(l.name,o.target.value)}
                            ></textarea>
                          </label>
                          <dialog
                            class="md-preview-dialog"
                            @click=${o=>{const d=o.currentTarget;o.target===d&&d.close()}}
                          >
                            <div class="md-preview-dialog__panel">
                              <div class="md-preview-dialog__header">
                                <div class="md-preview-dialog__title mono">${l.name}</div>
                                <button
                                  class="btn btn--sm"
                                  @click=${o=>{o.currentTarget.closest("dialog")?.close()}}
                                >${N.x} Close</button>
                              </div>
                              <div class="md-preview-dialog__body sidebar-markdown">
                                ${Q(V(u))}
                              </div>
                            </div>
                          </dialog>
                        `:i`
                          <div class="muted">Select a file to edit.</div>
                        `}
                </div>
              </div>
            `:i`
              <div class="callout info" style="margin-top: 12px">
                Load the agent workspace files to edit core instructions.
              </div>
            `}
    </section>
  `}function me(e,n,t){const s=e.missing?"Missing":`${le(e.size)} · ${z(e.updatedAtMs??null)}`;return i`
    <button
      type="button"
      class="agent-file-row ${n===e.name?"active":""}"
      @click=${t}
    >
      <div>
        <div class="agent-file-name mono">${e.name}</div>
        <div class="agent-file-meta">${s}</div>
      </div>
      ${e.missing?i`
              <span class="agent-pill warn">missing</span>
            `:a}
    </button>
  `}function we(e,n){const t=n.source??e.source,s=n.pluginId??e.pluginId,l=[];return t==="plugin"&&s?l.push(`plugin:${s}`):t==="core"&&l.push("core"),n.optional&&l.push("optional"),l.length===0?a:i`
    <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px;">
      ${l.map(g=>i`<span class="agent-pill">${g}</span>`)}
    </div>
  `}function Ce(e){const n=p(e.configForm,e.agentId),t=n.entry?.tools??{},s=n.globalTools??{},l=t.profile??s.profile??"full",g=te(e.toolsCatalogResult),u=ne(e.toolsCatalogResult),$=t.profile?"agent override":s.profile?"global default":"default",o=Array.isArray(t.allow)&&t.allow.length>0,d=Array.isArray(s.allow)&&s.allow.length>0,h=!!e.configForm&&!e.configLoading&&!e.configSaving&&!o&&!(e.toolsCatalogLoading&&!e.toolsCatalogResult&&!e.toolsCatalogError),A=o?[]:Array.isArray(t.alsoAllow)?t.alsoAllow:[],v=o?[]:Array.isArray(t.deny)?t.deny:[],y=o?{allow:t.allow??[],deny:t.deny??[]}:ie(l)??void 0,L=u.flatMap(c=>c.tools.map(f=>f.id)),F=c=>{const f=se(c,y),b=B(c,A),r=B(c,v);return{allowed:(f||b)&&!r,baseAllowed:f,denied:r}},T=L.filter(c=>F(c).allowed).length,D=(c,f)=>{const b=new Set(A.map(w=>R(w)).filter(w=>w.length>0)),r=new Set(v.map(w=>R(w)).filter(w=>w.length>0)),I=F(c).baseAllowed,m=R(c);f?(r.delete(m),I||b.add(m)):(b.delete(m),r.add(m)),e.onOverridesChange(e.agentId,[...b],[...r])},x=c=>{const f=new Set(A.map(r=>R(r)).filter(r=>r.length>0)),b=new Set(v.map(r=>R(r)).filter(r=>r.length>0));for(const r of L){const I=F(r).baseAllowed,m=R(r);c?(b.delete(m),I||f.add(m)):(f.delete(m),b.add(m))}e.onOverridesChange(e.agentId,[...f],[...b])};return i`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Tool Access</div>
          <div class="card-sub">
            Profile + per-tool overrides for this agent.
            <span class="mono">${T}/${L.length}</span> enabled.
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!h} @click=${()=>x(!0)}>
            Enable All
          </button>
          <button class="btn btn--sm" ?disabled=${!h} @click=${()=>x(!1)}>
            Disable All
          </button>
          <button class="btn btn--sm" ?disabled=${e.configLoading} @click=${e.onConfigReload}>
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?a:i`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to adjust tool profiles.
              </div>
            `}
      ${o?i`
              <div class="callout info" style="margin-top: 12px">
                This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.
              </div>
            `:a}
      ${d?i`
              <div class="callout info" style="margin-top: 12px">
                Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.
              </div>
            `:a}
      ${e.toolsCatalogLoading&&!e.toolsCatalogResult&&!e.toolsCatalogError?i`
              <div class="callout info" style="margin-top: 12px">Loading runtime tool catalog…</div>
            `:a}
      ${e.toolsCatalogError?i`
              <div class="callout info" style="margin-top: 12px">
                Could not load runtime tool catalog. Showing built-in fallback list instead.
              </div>
            `:a}

      <div class="agent-tools-meta" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Profile</div>
          <div class="mono">${l}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Source</div>
          <div>${$}</div>
        </div>
        ${e.configDirty?i`
                <div class="agent-kv">
                  <div class="label">Status</div>
                  <div class="mono">unsaved</div>
                </div>
              `:a}
      </div>

      <div class="agent-tools-presets" style="margin-top: 16px;">
        <div class="label">Quick Presets</div>
        <div class="agent-tools-buttons">
          ${g.map(c=>i`
              <button
                class="btn btn--sm ${l===c.id?"active":""}"
                ?disabled=${!h}
                @click=${()=>e.onProfileChange(e.agentId,c.id,!0)}
              >
                ${c.label}
              </button>
            `)}
          <button
            class="btn btn--sm"
            ?disabled=${!h}
            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
          >
            Inherit
          </button>
        </div>
      </div>

      <div class="agent-tools-grid" style="margin-top: 20px;">
        ${u.map(c=>i`
              <div class="agent-tools-section">
                <div class="agent-tools-header">
                  ${c.label}
                  ${c.source==="plugin"&&c.pluginId?i`<span class="agent-pill" style="margin-left: 8px;">plugin:${c.pluginId}</span>`:a}
                </div>
                <div class="agent-tools-list">
                  ${c.tools.map(f=>{const{allowed:b}=F(f.id);return i`
                      <div class="agent-tool-row">
                        <div>
                          <div class="agent-tool-title mono">${f.label}</div>
                          <div class="agent-tool-sub">${f.description}</div>
                          ${we(c,f)}
                        </div>
                        <label class="cfg-toggle">
                          <input
                            type="checkbox"
                            .checked=${b}
                            ?disabled=${!h}
                            @change=${r=>D(f.id,r.target.checked)}
                          />
                          <span class="cfg-toggle__track"></span>
                        </label>
                      </div>
                    `})}
                </div>
              </div>
            `)}
      </div>
    </section>
  `}function Se(e){const n=!!e.configForm&&!e.configLoading&&!e.configSaving,t=p(e.configForm,e.agentId),s=Array.isArray(t.entry?.skills)?t.entry?.skills:void 0,l=new Set((s??[]).map(y=>y.trim()).filter(Boolean)),g=s!==void 0,u=!!(e.report&&e.activeAgentId===e.agentId),$=u?e.report?.skills??[]:[],o=e.filter.trim().toLowerCase(),d=o?$.filter(y=>[y.name,y.description,y.source].join(" ").toLowerCase().includes(o)):$,h=de(d),A=g?$.filter(y=>l.has(y.name)).length:$.length,v=$.length;return i`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">
            Per-agent skill allowlist and workspace skills.
            ${v>0?i`<span class="mono">${A}/${v}</span>`:a}
          </div>
        </div>
        <div class="row" style="gap: 8px; flex-wrap: wrap;">
          <div class="row" style="gap: 4px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 2px;">
            <button class="btn btn--sm" ?disabled=${!n} @click=${()=>e.onClear(e.agentId)}>
              Enable All
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!n}
              @click=${()=>e.onDisableAll(e.agentId)}
            >
              Disable All
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!n||!g}
              @click=${()=>e.onClear(e.agentId)}
              title="Remove per-agent allowlist and use all skills"
            >
              Reset
            </button>
          </div>
          <button class="btn btn--sm" ?disabled=${e.configLoading} @click=${e.onConfigReload}>
            Reload Config
          </button>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?a:i`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to set per-agent skills.
              </div>
            `}
      ${g?i`
              <div class="callout info" style="margin-top: 12px">This agent uses a custom skill allowlist.</div>
            `:i`
              <div class="callout info" style="margin-top: 12px">
                All skills are enabled. Disabling any skill will create a per-agent allowlist.
              </div>
            `}
      ${!u&&!e.loading?i`
              <div class="callout info" style="margin-top: 12px">
                Load skills for this agent to view workspace-specific entries.
              </div>
            `:a}
      ${e.error?i`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:a}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${y=>e.onFilterChange(y.target.value)}
            placeholder="Search skills"
            autocomplete="off"
            name="agent-skills-filter"
          />
        </label>
        <div class="muted">${d.length} shown</div>
      </div>

      ${d.length===0?i`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:i`
              <div class="agent-skills-groups" style="margin-top: 16px;">
                ${h.map(y=>Ae(y,{agentId:e.agentId,allowSet:l,usingAllowlist:g,editable:n,onToggle:e.onToggle}))}
              </div>
            `}
    </section>
  `}function Ae(e,n){const t=e.id==="workspace"||e.id==="built-in";return i`
    <details class="agent-skills-group" ?open=${!t}>
      <summary class="agent-skills-header">
        <span>${e.label}</span>
        <span class="muted">${e.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${e.skills.map(s=>Fe(s,{agentId:n.agentId,allowSet:n.allowSet,usingAllowlist:n.usingAllowlist,editable:n.editable,onToggle:n.onToggle}))}
      </div>
    </details>
  `}function Fe(e,n){const t=n.usingAllowlist?n.allowSet.has(e.name):!0,s=ce(e),l=ge(e);return i`
    <div class="list-item agent-skill-row">
      <div class="list-main">
        <div class="list-title">${e.emoji?`${e.emoji} `:""}${e.name}</div>
        <div class="list-sub">${e.description}</div>
        ${re({skill:e})}
        ${s.length>0?i`<div class="muted" style="margin-top: 6px;">Missing: ${s.join(", ")}</div>`:a}
        ${l.length>0?i`<div class="muted" style="margin-top: 6px;">Reason: ${l.join(", ")}</div>`:a}
      </div>
      <div class="list-meta">
        <label class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${t}
            ?disabled=${!n.editable}
            @change=${g=>n.onToggle(n.agentId,e.name,g.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </label>
      </div>
    </div>
  `}function Pe(e){const n=e.agentsList?.agents??[],t=e.agentsList?.defaultId??null,s=e.selectedAgentId??t??n[0]?.id??null,l=s?n.find(d=>d.id===s)??null:null,g=s&&e.agentSkills.agentId===s?e.agentSkills.report?.skills?.length??null:null,u=e.channels.snapshot?Object.keys(e.channels.snapshot.channelAccounts??{}).length:null,$=s?e.cron.jobs.filter(d=>d.agentId===s).length:null,o={files:e.agentFiles.list?.files?.length??null,skills:g,channels:u,cron:$||null};return i`
    <div class="agents-layout">
      <section class="agents-toolbar">
        <div class="agents-toolbar-row">
          <span class="agents-toolbar-label">Agent</span>
          <div class="agents-control-row">
            <div class="agents-control-select">
              <select
                class="agents-select"
                .value=${s??""}
                ?disabled=${e.loading||n.length===0}
                @change=${d=>e.onSelectAgent(d.target.value)}
              >
                ${n.length===0?i`
                        <option value="">No agents</option>
                      `:n.map(d=>i`
                        <option value=${d.id} ?selected=${d.id===s}>
                          ${ae(d)}${_(d.id,t)?` (${_(d.id,t)})`:""}
                        </option>
                      `)}
              </select>
            </div>
            <div class="agents-control-actions">
              ${l?i`
                      <div class="agent-actions-wrap">
                        <button
                          class="agent-actions-toggle"
                          type="button"
                          @click=${()=>{P=!P}}
                        >⋯</button>
                        ${P?i`
                                <div class="agent-actions-menu">
                                  <button type="button" @click=${()=>{navigator.clipboard.writeText(l.id),P=!1}}>Copy agent ID</button>
                                  <button
                                    type="button"
                                    ?disabled=${!!(t&&l.id===t)}
                                    @click=${()=>{e.onSetDefault(l.id),P=!1}}
                                  >
                                    ${t&&l.id===t?"Already default":"Set as default"}
                                  </button>
                                </div>
                              `:a}
                      </div>
                    `:a}
              <button class="btn btn--sm agents-refresh-btn" ?disabled=${e.loading} @click=${e.onRefresh}>
                ${e.loading?"Loading…":"Refresh"}
              </button>
            </div>
          </div>
        </div>
        ${e.error?i`<div class="callout danger" style="margin-top: 8px;">${e.error}</div>`:a}
      </section>
      <section class="agents-main">
        ${l?i`
                ${xe(e.activePanel,d=>e.onSelectPanel(d),o)}
                ${e.activePanel==="overview"?ve({agent:l,basePath:e.basePath,defaultId:t,configForm:e.config.form,agentFilesList:e.agentFiles.list,agentIdentity:e.agentIdentityById[l.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.config.loading,configSaving:e.config.saving,configDirty:e.config.dirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange,onSelectPanel:e.onSelectPanel}):a}
                ${e.activePanel==="files"?ke({agentId:l.id,agentFilesList:e.agentFiles.list,agentFilesLoading:e.agentFiles.loading,agentFilesError:e.agentFiles.error,agentFileActive:e.agentFiles.active,agentFileContents:e.agentFiles.contents,agentFileDrafts:e.agentFiles.drafts,agentFileSaving:e.agentFiles.saving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):a}
                ${e.activePanel==="tools"?Ce({agentId:l.id,configForm:e.config.form,configLoading:e.config.loading,configSaving:e.config.saving,configDirty:e.config.dirty,toolsCatalogLoading:e.toolsCatalog.loading,toolsCatalogError:e.toolsCatalog.error,toolsCatalogResult:e.toolsCatalog.result,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):a}
                ${e.activePanel==="skills"?Se({agentId:l.id,report:e.agentSkills.report,loading:e.agentSkills.loading,error:e.agentSkills.error,activeAgentId:e.agentSkills.agentId,configForm:e.config.form,configLoading:e.config.loading,configSaving:e.config.saving,configDirty:e.config.dirty,filter:e.agentSkills.filter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):a}
                ${e.activePanel==="channels"?he({context:j(l,e.config.form,e.agentFiles.list,t,e.agentIdentityById[l.id]??null),configForm:e.config.form,snapshot:e.channels.snapshot,loading:e.channels.loading,error:e.channels.error,lastSuccess:e.channels.lastSuccess,onRefresh:e.onChannelsRefresh}):a}
                ${e.activePanel==="cron"?ye({context:j(l,e.config.form,e.agentFiles.list,t,e.agentIdentityById[l.id]??null),agentId:l.id,jobs:e.cron.jobs,status:e.cron.status,loading:e.cron.loading,error:e.cron.error,onRefresh:e.onCronRefresh,onRunNow:e.onCronRunNow}):a}
              `:i`
                <div class="card">
                  <div class="card-title">Select an agent</div>
                  <div class="card-sub">Pick an agent to inspect its workspace and tools.</div>
                </div>
              `}
      </section>
    </div>
  `}let P=!1;function xe(e,n,t){return i`
    <div class="agent-tabs">
      ${[{id:"overview",label:"Overview"},{id:"files",label:"Files"},{id:"tools",label:"Tools"},{id:"skills",label:"Skills"},{id:"channels",label:"Channels"},{id:"cron",label:"Cron Jobs"}].map(l=>i`
          <button
            class="agent-tab ${e===l.id?"active":""}"
            type="button"
            @click=${()=>n(l.id)}
          >
            ${l.label}${t[l.id]!=null?i`<span class="agent-tab-count">${t[l.id]}</span>`:a}
          </button>
        `)}
    </div>
  `}export{Pe as renderAgents};
//# sourceMappingURL=agents-DAXv09px.js.map
