import{A as g,d as o,i as L,f as K,H as R,N as U}from"./index-ZjeCnFNw.js";const A=["","off","minimal","low","medium","high","xhigh"],D=["","off","on"],P=[{value:"",label:"inherit"},{value:"off",label:"off (explicit)"},{value:"on",label:"on"},{value:"full",label:"full"}],G=[{value:"",label:"inherit"},{value:"on",label:"on"},{value:"off",label:"off"}],_=["","off","on","stream"],w=[10,25,50,100];function F(e){if(!e)return"";const n=e.trim().toLowerCase();return n==="z.ai"||n==="z-ai"?"zai":n}function C(e){return F(e)==="zai"}function V(e){return C(e)?D:A}function S(e,n){return n?e.includes(n)?[...e]:[...e,n]:[...e]}function p(e,n){return n?e.some(l=>l.value===n)?[...e]:[...e,{value:n,label:`${n} (custom)`}]:[...e]}function I(e,n){return!n||!e||e==="off"?e:"on"}function B(e,n){return e?n&&e==="on"?"low":e:null}function O(e,n){const l=n.trim().toLowerCase();return l?e.filter(r=>{const c=(r.key??"").toLowerCase(),d=(r.label??"").toLowerCase(),i=(r.kind??"").toLowerCase(),s=(r.displayName??"").toLowerCase();return c.includes(l)||d.includes(l)||i.includes(l)||s.includes(l)}):e}function H(e,n,l){const r=l==="asc"?1:-1;return[...e].toSorted((c,d)=>{let i=0;switch(n){case"key":i=(c.key??"").localeCompare(d.key??"");break;case"kind":i=(c.kind??"").localeCompare(d.kind??"");break;case"updated":{const s=c.updatedAt??0,u=d.updatedAt??0;i=s-u;break}case"tokens":{const s=c.totalTokens??c.inputTokens??c.outputTokens??0,u=d.totalTokens??d.inputTokens??d.outputTokens??0;i=s-u;break}}return i*r})}function Q(e,n,l){const r=n*l;return e.slice(r,r+l)}function Y(e){const n=e.result?.sessions??[],l=O(n,e.searchQuery),r=H(l,e.sortColumn,e.sortDir),c=r.length,d=Math.max(1,Math.ceil(c/e.pageSize)),i=Math.min(e.page,d-1),s=Q(r,i,e.pageSize),u=(a,b,$="")=>{const v=e.sortColumn===a,f=v&&e.sortDir==="asc"?"desc":"asc";return o`
      <th
        class=${$}
        data-sortable
        data-sort-dir=${v?e.sortDir:""}
        @click=${()=>e.onSortChange(a,v?f:"desc")}
      >
        ${b}
        <span class="data-table-sort-icon">${L.arrowUpDown}</span>
      </th>
    `};return o`
    <section class="card">
      <div class="row" style="justify-content: space-between; margin-bottom: 12px;">
        <div>
          <div class="card-title">Sessions</div>
          <div class="card-sub">${e.result?`Store: ${e.result.path}`:"Active session keys and per-session overrides."}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-bottom: 12px;">
        <label class="field-inline">
          <span>Active</span>
          <input
            style="width: 72px;"
            placeholder="min"
            .value=${e.activeMinutes}
            @input=${a=>e.onFiltersChange({activeMinutes:a.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field-inline">
          <span>Limit</span>
          <input
            style="width: 64px;"
            .value=${e.limit}
            @input=${a=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:a.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field-inline checkbox">
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${a=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:a.target.checked,includeUnknown:e.includeUnknown})}
          />
          <span>Global</span>
        </label>
        <label class="field-inline checkbox">
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${a=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:a.target.checked})}
          />
          <span>Unknown</span>
        </label>
      </div>

      ${e.error?o`<div class="callout danger" style="margin-bottom: 12px;">${e.error}</div>`:g}

      <div class="data-table-wrapper">
        <div class="data-table-toolbar">
          <div class="data-table-search">
            <input
              type="text"
              placeholder="Filter by key, label, kind…"
              .value=${e.searchQuery}
              @input=${a=>e.onSearchChange(a.target.value)}
            />
          </div>
        </div>

        ${e.selectedKeys.size>0?o`
                <div class="data-table-bulk-bar">
                  <span>${e.selectedKeys.size} selected</span>
                  <button
                    class="btn btn--sm"
                    @click=${e.onDeselectAll}
                  >
                    Unselect
                  </button>
                  <button
                    class="btn btn--sm danger"
                    ?disabled=${e.loading}
                    @click=${e.onDeleteSelected}
                  >
                    ${L.trash} Delete
                  </button>
                </div>
              `:g}

        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th class="data-table-checkbox-col">
                  ${s.length>0?o`<input
                        type="checkbox"
                        .checked=${s.length>0&&s.every(a=>e.selectedKeys.has(a.key))}
                        .indeterminate=${s.some(a=>e.selectedKeys.has(a.key))&&!s.every(a=>e.selectedKeys.has(a.key))}
                        @change=${()=>{s.every(b=>e.selectedKeys.has(b.key))?e.onDeselectPage(s.map(b=>b.key)):e.onSelectPage(s.map(b=>b.key))}}
                        aria-label="Select all on page"
                      />`:g}
                </th>
                ${u("key","Key","data-table-key-col")}
                <th>Label</th>
                ${u("kind","Kind")}
                ${u("updated","Updated")}
                ${u("tokens","Tokens")}
                <th>Thinking</th>
                <th>Fast</th>
                <th>Verbose</th>
                <th>Reasoning</th>
              </tr>
            </thead>
            <tbody>
              ${s.length===0?o`
                      <tr>
                        <td colspan="10" style="text-align: center; padding: 48px 16px; color: var(--muted)">
                          No sessions found.
                        </td>
                      </tr>
                    `:s.map(a=>j(a,e.basePath,e.onPatch,e.selectedKeys.has(a.key),e.onToggleSelect,e.loading,e.onNavigateToChat))}
            </tbody>
          </table>
        </div>

        ${c>0?o`
                <div class="data-table-pagination">
                  <div class="data-table-pagination__info">
                    ${i*e.pageSize+1}-${Math.min((i+1)*e.pageSize,c)}
                    of ${c} row${c===1?"":"s"}
                  </div>
                  <div class="data-table-pagination__controls">
                    <select
                      style="height: 32px; padding: 0 8px; font-size: 13px; border-radius: var(--radius-md); border: 1px solid var(--border); background: var(--card);"
                      .value=${String(e.pageSize)}
                      @change=${a=>e.onPageSizeChange(Number(a.target.value))}
                    >
                      ${w.map(a=>o`<option value=${a}>${a} per page</option>`)}
                    </select>
                    <button
                      ?disabled=${i<=0}
                      @click=${()=>e.onPageChange(i-1)}
                    >
                      Previous
                    </button>
                    <button
                      ?disabled=${i>=d-1}
                      @click=${()=>e.onPageChange(i+1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              `:g}
      </div>
    </section>
  `}function j(e,n,l,r,c,d,i){const s=e.updatedAt?K(e.updatedAt):"n/a",u=e.thinkingLevel??"",a=C(e.modelProvider),b=I(u,a),$=S(V(e.modelProvider),b),v=e.fastMode===!0?"on":e.fastMode===!1?"off":"",f=p(G,v),m=e.verboseLevel??"",T=p(P,m),y=e.reasoningLevel??"",z=S(_,y),k=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,M=!!(k&&k!==e.key&&k!==(typeof e.label=="string"?e.label.trim():"")),x=e.kind!=="global",N=x?`${R("chat",n)}?session=${encodeURIComponent(e.key)}`:null,E=e.kind==="direct"?"data-table-badge--direct":e.kind==="group"?"data-table-badge--group":e.kind==="global"?"data-table-badge--global":"data-table-badge--unknown";return o`
    <tr>
      <td class="data-table-checkbox-col">
        <input
          type="checkbox"
          .checked=${r}
          @change=${()=>c(e.key)}
          aria-label="Select session"
        />
      </td>
      <td class="data-table-key-col">
        <div class="mono session-key-cell">
          ${x?o`<a
                  href=${N}
                  class="session-link"
                  @click=${t=>{t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||i&&(t.preventDefault(),i(e.key))}}
                >${e.key}</a>`:e.key}
          ${M?o`<span class="muted session-key-display-name">${k}</span>`:g}
        </div>
      </td>
      <td>
        <input
          .value=${e.label??""}
          ?disabled=${d}
          placeholder="(optional)"
          style="width: 100%; max-width: 140px; padding: 6px 10px; font-size: 13px; border: 1px solid var(--border); border-radius: var(--radius-sm);"
          @change=${t=>{const h=t.target.value.trim();l(e.key,{label:h||null})}}
        />
      </td>
      <td>
        <span class="data-table-badge ${E}">${e.kind}</span>
      </td>
      <td>${s}</td>
      <td>${U(e)}</td>
      <td>
        <select
          ?disabled=${d}
          style="padding: 6px 10px; font-size: 13px; border: 1px solid var(--border); border-radius: var(--radius-sm); min-width: 90px;"
          @change=${t=>{const h=t.target.value;l(e.key,{thinkingLevel:B(h,a)})}}
        >
          ${$.map(t=>o`<option value=${t} ?selected=${b===t}>
                ${t||"inherit"}
              </option>`)}
        </select>
      </td>
      <td>
        <select
          ?disabled=${d}
          style="padding: 6px 10px; font-size: 13px; border: 1px solid var(--border); border-radius: var(--radius-sm); min-width: 90px;"
          @change=${t=>{const h=t.target.value;l(e.key,{fastMode:h===""?null:h==="on"})}}
        >
          ${f.map(t=>o`<option value=${t.value} ?selected=${v===t.value}>
                ${t.label}
              </option>`)}
        </select>
      </td>
      <td>
        <select
          ?disabled=${d}
          style="padding: 6px 10px; font-size: 13px; border: 1px solid var(--border); border-radius: var(--radius-sm); min-width: 90px;"
          @change=${t=>{const h=t.target.value;l(e.key,{verboseLevel:h||null})}}
        >
          ${T.map(t=>o`<option value=${t.value} ?selected=${m===t.value}>
                ${t.label}
              </option>`)}
        </select>
      </td>
      <td>
        <select
          ?disabled=${d}
          style="padding: 6px 10px; font-size: 13px; border: 1px solid var(--border); border-radius: var(--radius-sm); min-width: 90px;"
          @change=${t=>{const h=t.target.value;l(e.key,{reasoningLevel:h||null})}}
        >
          ${z.map(t=>o`<option value=${t} ?selected=${y===t}>
                ${t||"inherit"}
              </option>`)}
        </select>
      </td>
    </tr>
  `}export{Y as renderSessions};
//# sourceMappingURL=sessions-CJ8MjAMG.js.map
