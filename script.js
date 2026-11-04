const $ = (id) => document.getElementById(id);
const templates = {
  opay: { label: "OPay-style", brand: "OPay-style" },
  firstbank: { label: "FirstBank-style", brand: "FirstBank-style" },
  access: { label: "Access Bank-style", brand: "Access Bank-style" },
  paypal: { label: "PayPal-style", brand: "PayPal-style" }
};
let selected = "opay";

const now = new Date();
$("date").value = new Date(now.getTime() - now.getTimezoneOffset()*60000).toISOString().slice(0,10);
$("time").value = now.toTimeString().slice(0,5);

document.querySelectorAll(".template").forEach(btn => {
  btn.addEventListener("click", () => {
    selected = btn.dataset.template;
    document.querySelectorAll(".template").forEach(b => b.classList.toggle("active", b === btn));
    $("receipt").className = `receipt ${selected}`;
    $("brandName").textContent = templates[selected].brand;
  });
});

function currencyFormat(amount, currency) {
  try { return new Intl.NumberFormat("en", {style:"currency", currency, minimumFractionDigits:2}).format(amount); }
  catch { return `${currency} ${Number(amount).toFixed(2)}`; }
}
function makeRef() {
  return "DEMO-" + Math.random().toString(36).slice(2,8).toUpperCase() + "-" + Date.now().toString().slice(-5);
}
function updateReceipt() {
  const amount = Number($("amount").value);
  if (!Number.isFinite(amount) || amount <= 0) {
    $("downloadHint").textContent = "Enter an amount greater than zero.";
    return false;
  }
  $("outAmount").textContent = currencyFormat(amount, $("currency").value);
  $("outSender").textContent = $("sender").value.trim() || "Sample sender";
  $("outReceiver").textContent = $("receiver").value.trim() || "Sample receiver";
  $("outDate").textContent = $("date").value || "Not specified";
  $("outTime").textContent = $("time").value || "Not specified";
  $("outNote").textContent = $("note").value.trim() || "Demo mockup";
  $("outRef").textContent = makeRef();
  $("brandName").textContent = templates[selected].brand;
  $("receipt").className = `receipt ${selected}`;
  $("downloadHint").textContent = "Demo receipt generated. It is not evidence of a real payment.";
  return true;
}
$("receiptForm").addEventListener("submit", e => { e.preventDefault(); updateReceipt(); });
$("printBtn").addEventListener("click", () => { if (updateReceipt()) window.print(); });
$("pngBtn").addEventListener("click", async () => {
  if (!updateReceipt()) return;
  if (!window.html2canvas) {
    $("downloadHint").textContent = "PNG library did not load. Use Print / Save as PDF instead.";
    return;
  }
  try {
    const canvas = await html2canvas($("receipt"), {scale:2, backgroundColor:"#ffffff"});
    const link = document.createElement("a");
    link.download = "demo-receipt-mockup.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    $("downloadHint").textContent = "Demo PNG downloaded.";
  } catch {
    $("downloadHint").textContent = "PNG export failed. Use Print / Save as PDF instead.";
  }
});
updateReceipt();
