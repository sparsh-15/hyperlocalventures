"use client";

import { useEffect, useState, useMemo } from "react";
import { getContactSubmissions, getVisits } from "@/lib/firbase";
import { User, Phone, MapPin, Tag, Loader2, FileText, Users, LayoutDashboard, Lock, LogOut, Eye, EyeOff, Download } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import * as XLSX from "xlsx";

const ADMIN_PASSWORD = "admin@123";
const AUTH_KEY = "admin_authenticated";

function getDateOnly(str) {
  if (!str) return "";
  return str.split("T")[0];
}

function filterByDateRange(items, dateField, fromDate, toDate) {
  if (!fromDate && !toDate) return items;
  return items.filter((item) => {
    const d = getDateOnly(item[dateField]);
    if (!d) return false;
    if (fromDate && d < fromDate) return false;
    if (toDate && d > toDate) return false;
    return true;
  });
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [visits, setVisits] = useState([]);
  const [filterPreset, setFilterPreset] = useState("all"); // "all" | "today" | "yesterday" | "custom"
  const [customFromDate, setCustomFromDate] = useState("");
  const [customToDate, setCustomToDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { fromDate, toDate } = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    if (filterPreset === "today") return { fromDate: today, toDate: today };
    if (filterPreset === "yesterday") return { fromDate: yesterday, toDate: yesterday };
    if (filterPreset === "custom") return { fromDate: customFromDate, toDate: customToDate };
    return { fromDate: "", toDate: "" };
  }, [filterPreset, customFromDate, customToDate]);

  const filteredSubmissions = useMemo(
    () => filterByDateRange(submissions, "createdAt", fromDate, toDate),
    [submissions, fromDate, toDate]
  );
  const filteredVisits = useMemo(
    () => filterByDateRange(visits, "timestamp", fromDate, toDate),
    [visits, fromDate, toDate]
  );

  useEffect(() => {
    setAuthChecked(true);
    setAuthenticated(sessionStorage.getItem(AUTH_KEY) === "1");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError("");
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setAuthenticated(true);
      setPassword("");
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
    setLogoutOpen(false);
  };

  const exportToExcel = (type) => {
    const wb = XLSX.utils.book_new();
    if (type === "submissions") {
      const rows = filteredSubmissions.map((s) => ({
        Name: s.name,
        Phone: s.phone,
        Pincode: s.pincode,
        "I am a": s.type,
        "Submitted At": s.createdAt ? new Date(s.createdAt).toLocaleString() : "",
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      XLSX.utils.book_append_sheet(wb, ws, "Contact Submissions");
    } else {
      const rows = filteredVisits.map((v, i) => ({
        "#": i + 1,
        "Visited At": v.timestamp ? new Date(v.timestamp).toLocaleString() : "",
        Path: v.path || "/",
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      XLSX.utils.book_append_sheet(wb, ws, "Visitors");
    }
    XLSX.writeFile(wb, `admin-${type}-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [subs, vis] = await Promise.all([
          getContactSubmissions(),
          getVisits(),
        ]);
        setSubmissions(subs);
        setVisits(vis);
      } catch (err) {
        setError("Failed to load dashboard data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (authenticated) fetchData();
  }, [authenticated]);

  if (!authChecked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-neon" />
      </main>
    );
  }

  if (!authenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-surface/80 p-8 backdrop-blur-sm">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon">
              <Lock size={28} />
            </div>
          </div>
          <h1 className="text-center text-xl font-bold text-foreground">Admin Access</h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Enter password to continue
          </p>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="h-11 w-full rounded-lg border border-border/60 bg-background/60 px-4 pr-12 text-sm text-foreground outline-none transition-colors focus:border-neon"
                required
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {authError && <p className="text-sm text-red-500">{authError}</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-neon px-6 py-3 text-sm font-bold uppercase tracking-wide text-background transition-all hover:opacity-90"
            >
              Enter
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LayoutDashboard className="h-5 w-5 text-neon" />
              <p className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon">
                Admin
              </p>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Dashboard
            </h1>
            <p className="mt-2 text-muted-foreground">
              Overview of your website activity and contact submissions.
            </p>
          </div>
          <button
            onClick={() => setLogoutOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-red-500/50 hover:text-red-500"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Do you want to logout?</AlertDialogTitle>
              <AlertDialogDescription>
                You will need to enter the password again to access the admin dashboard.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="h-12 w-12 animate-spin text-neon" />
            <p className="mt-4 text-sm text-muted-foreground">Loading dashboard...</p>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-8 text-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <>
            {/* Date Filter */}
            <div className="mb-8 rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Filter by date</h3>
              <div className="flex flex-wrap items-end gap-3">
                <button
                  onClick={() => setFilterPreset("all")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filterPreset === "all"
                      ? "bg-neon text-background"
                      : "border border-border/60 text-muted-foreground hover:border-neon/40 hover:text-foreground"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterPreset("today")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filterPreset === "today"
                      ? "bg-neon text-background"
                      : "border border-border/60 text-muted-foreground hover:border-neon/40 hover:text-foreground"
                  }`}
                >
                  Today
                </button>
                <button
                  onClick={() => setFilterPreset("yesterday")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filterPreset === "yesterday"
                      ? "bg-neon text-background"
                      : "border border-border/60 text-muted-foreground hover:border-neon/40 hover:text-foreground"
                  }`}
                >
                  Yesterday
                </button>
                <button
                  onClick={() => setFilterPreset("custom")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filterPreset === "custom"
                      ? "bg-neon text-background"
                      : "border border-border/60 text-muted-foreground hover:border-neon/40 hover:text-foreground"
                  }`}
                >
                  Custom
                </button>
                {filterPreset === "custom" && (
                  <>
                    <div>
                      <label className="mb-1 block text-xs text-muted-foreground">From</label>
                      <input
                        type="date"
                        value={customFromDate}
                        onChange={(e) => setCustomFromDate(e.target.value)}
                        className="h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-muted-foreground">To</label>
                      <input
                        type="date"
                        value={customToDate}
                        onChange={(e) => setCustomToDate(e.target.value)}
                        className="h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm transition-colors hover:border-neon/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Form Submissions {(fromDate || toDate) && `(filtered)`}
                    </p>
                    <p className="mt-2 text-4xl font-bold text-foreground">
                      {filteredSubmissions.length}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon">
                      <FileText size={28} />
                    </div>
                    <button
                      onClick={() => exportToExcel("submissions")}
                      disabled={filteredSubmissions.length === 0}
                      className="flex items-center justify-center gap-1 rounded-lg bg-neon/10 px-2 py-1 text-xs font-medium text-neon hover:bg-neon/20 disabled:opacity-50"
                    >
                      <Download size={12} /> Export
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground/80">
                  Contact form entries
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm transition-colors hover:border-neon/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Visitors {(fromDate || toDate) && `(filtered)`}
                    </p>
                    <p className="mt-2 text-4xl font-bold text-foreground">
                      {filteredVisits.length}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon">
                      <Users size={28} />
                    </div>
                    <button
                      onClick={() => exportToExcel("visitors")}
                      disabled={filteredVisits.length === 0}
                      className="flex items-center justify-center gap-1 rounded-lg bg-neon/10 px-2 py-1 text-xs font-medium text-neon hover:bg-neon/20 disabled:opacity-50"
                    >
                      <Download size={12} /> Export
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground/80">
                  Unique sessions
                </p>
              </div>
            </div>

            {/* Submissions Section */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-foreground">
                Contact Submissions
              </h2>

              {filteredSubmissions.length === 0 ? (
                <div className="rounded-2xl border border-border/60 bg-surface/80 p-12 text-center">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="mt-4 text-muted-foreground">No submissions yet.</p>
                  <p className="mt-1 text-sm text-muted-foreground/70">
                    Submissions will appear here when users fill the contact form.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredSubmissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm"
                    >
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/10 text-neon">
                            <User size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                              Name
                            </p>
                            <p className="text-sm font-medium text-foreground">{sub.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/10 text-neon">
                            <Phone size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                              Phone
                            </p>
                            <p className="text-sm font-medium text-foreground">{sub.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/10 text-neon">
                            <MapPin size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                              Pincode
                            </p>
                            <p className="text-sm font-medium text-foreground">{sub.pincode}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/10 text-neon">
                            <Tag size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                              I am a
                            </p>
                            <p className="text-sm font-medium text-foreground">{sub.type}</p>
                          </div>
                        </div>
                      </div>
                      {sub.createdAt && (
                        <p className="mt-4 text-xs text-muted-foreground/80">
                          Submitted at {new Date(sub.createdAt).toLocaleString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
