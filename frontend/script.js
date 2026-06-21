(function () {
  "use strict";

  /* ----------------------------------------
     i18n — language switch (EN / VI)
     Tech names (Python, Airflow, PostgreSQL...) are kept in English.
  ---------------------------------------- */
  var I18N = {
    vi: {
      "nav.projects": "Dự án",
      "nav.skills": "Kỹ năng",
      "nav.resume": "Hồ sơ",
      "nav.writing": "Bài viết",
      "nav.contact": "Liên hệ",

      "hero.eyebrow": "Full-Stack Data",
      "hero.title": "Tôi biến dữ liệu lộn xộn thành mô hình <span class=\"nowrap\">chạy được <span class=\"accent\">thật.</span></span>",
      "hero.lede": "Tôi xây dựng các data pipeline có khả năng mở rộng, thiết kế quy trình dữ liệu đáng tin cậy, và biến dữ liệu thô thành thông tin có giá trị. Tôi chuyên về data engineering, quy trình ETL, hệ thống cơ sở dữ liệu, và các giải pháp phân tích giúp tổ chức ra quyết định tốt hơn.",
      "hero.viewProjects": "Xem dự án",
      "hero.seeResume": "Xem hồ sơ",

      "section.projects": "Dự án",
      "section.skills": "Kỹ năng",
      "section.resume": "Hồ sơ",
      "section.writing": "Bài viết",

      "proj.churn.title": "Churn Prediction Pipeline",
      "proj.churn.desc": "Pipeline đầu-cuối chấm điểm rủi ro rời bỏ của khách hàng hàng tuần, có cơ chế tự huấn luyện lại và giám sát trôi mô hình (drift) tích hợp sẵn.",
      "proj.rfm.title": "Phân khúc khách hàng — Phân tích RFM",
      "proj.rfm.desc": "Phân 4,35 triệu hợp đồng khách hàng thành 9 nhóm có thể hành động bằng chấm điểm RFM trên SQL, bàn giao dưới dạng dashboard Power BI 4 trang cho đội CS.",
      "card.viewCase": "Xem case study →",
      "card.github": "GitHub ↗",
      "proj.fraud.title": "Phát hiện gian lận thời gian thực",
      "proj.fraud.desc": "Tính toán đặc trưng theo luồng trên pipeline Kafka, cấp dữ liệu cho dịch vụ suy luận độ trễ thấp để chấm điểm giao dịch.",
      "proj.search.title": "Tìm kiếm tài liệu ngữ nghĩa",
      "proj.search.desc": "Hệ thống truy hồi bằng vector embedding kèm bước xếp hạng lại, giảm một nửa thời gian trung bình từ tìm kiếm đến câu trả lời.",
      "proj.climate.title": "Dự báo chuỗi thời gian khí hậu",
      "proj.climate.desc": "Mô hình dự báo xác suất với dải bất định được hiệu chỉnh, dùng cho các kịch bản quy hoạch theo vùng.",

      "resume.lede": "Tóm tắt nhanh bên dưới — hoặc tải bản PDF đầy đủ.",
      "resume.download": "Tải PDF ↓",

      "exp.fundlok.date": "04/2026 — Hiện tại",
      "exp.fundlok.role": "Kỹ sư Hệ thống & Cơ sở dữ liệu (Cộng tác), Fundlok",
      "exp.fundlok.b1": "Thiết kế và duy trì schema PostgreSQL (ERD/mô hình dữ liệu) cho hệ thống giao dịch tài chính, gồm chuẩn hóa, thiết kế quan hệ và chiến lược đánh chỉ mục.",
      "exp.fundlok.b2": "Tối ưu cơ sở dữ liệu — tinh chỉnh truy vấn và cải thiện hiệu năng cho khối lượng giao dịch lớn.",
      "exp.fundlok.b3": "Xây dựng và duy trì pipeline CI/CD bằng GitHub Actions, hỗ trợ kiểm tra chất lượng, kiểm thử và triển khai tự động.",
      "exp.fundlok.b4": "Phối hợp với đội phát triển để giữ tính nhất quán giữa backend và cơ sở dữ liệu trên các dịch vụ và môi trường, nâng cao độ tin cậy hệ thống và quản lý thay đổi cơ sở dữ liệu.",

      "exp.ezcloud.date": "03/2026 — Hiện tại",
      "exp.ezcloud.role": "Điều phối Hiệu suất & Thương mại (Thực tập), ECOM | Ezcloud",
      "exp.ezcloud.b1": "Xây dựng và duy trì dashboard Power BI theo dõi hiệu suất thương mại điện tử khách sạn trên các OTA, giúp ra quyết định kinh doanh nhanh và dựa trên dữ liệu hơn.",
      "exp.ezcloud.b2": "Phân tích dữ liệu đặt phòng, doanh thu và khuyến mãi để phát hiện điểm yếu và cơ hội tối ưu, hỗ trợ quyết định giá và đề xuất hành động.",
      "exp.ezcloud.b3": "Góp phần tăng doanh thu 30 triệu VND, vượt mục tiêu 7% (400 triệu VND so với mục tiêu 373 triệu VND).",

      "exp.vnpt.date": "11/2025 — 02/2026",
      "exp.vnpt.role": "Thực tập sinh Data Engineering / Hỗ trợ BI, VNPT",
      "exp.vnpt.b1": "Hỗ trợ và theo dõi quy trình dữ liệu xây trên Apache NiFi, tham gia cấu hình cơ bản và giám sát các luồng dữ liệu theo lô.",
      "exp.vnpt.b2": "Hỗ trợ kiểm tra tính hợp lệ và chất lượng dữ liệu để đảm bảo tính nhất quán và chính xác của các tập dữ liệu đã xử lý.",
      "exp.vnpt.b3": "Hỗ trợ chuyển đổi và chuẩn bị dữ liệu cho báo cáo và các tác vụ phân tích phía sau.",
      "exp.vnpt.b4": "Xây dashboard Power BI trực quan hóa các KPI vận hành như số lượng báo cáo, trạng thái xử lý và thời gian giải quyết.",

      "edu.education": "Học vấn",
      "edu.degree": "Cử nhân Thống kê — Đại học Lakeshore, 2019",
      "edu.certs": "Chứng chỉ",
      "edu.databricks": "Databricks Data Engineer — đang học",
      "edu.training": "Đào tạo kỹ thuật bổ sung (Tự học)",
      "edu.t1": "Nền tảng CS cốt lõi: C++, Cấu trúc dữ liệu & Giải thuật",
      "edu.t2": "Nền tảng cơ sở dữ liệu & hệ phân tán",
      "edu.t3": "Toán cho Machine Learning",
      "edu.t4": "Thực hành data engineering ứng dụng",
      "edu.languages": "Ngôn ngữ",
      "edu.langEn": "Tiếng Anh — Trung cấp trên",
      "edu.langVi": "Tiếng Việt — Bản ngữ",

      "post.1": "Vì sao tôi dựng lại portfolio bằng Terraform trên Azure",
      "post.2": "Ghi chú khi đưa mô hình churn lên production",
      "post.3": "Hướng dẫn thực dụng về feature store",

      "footer.title": "Cùng trò chuyện",
      "footer.sub": "Sẵn sàng cho các vị trí data engineering và phân tích.",
      "footer.visitors": "Lượt truy cập:",

      "rfm.crumb": "Phân khúc khách hàng — Phân tích RFM",
      "rfm.title": "Phân khúc khách hàng<br>Phân tích RFM",
      "rfm.summary": "Phân 4,35 triệu hợp đồng khách hàng thành 9 nhóm có thể hành động bằng chấm điểm RFM dựa trên IQR — để đội CSKH chạy chiến dịch giữ chân đúng đối tượng, thay vì gửi cùng một thông điệp cho tất cả.",
      "rfm.github": "Xem trên GitHub →",
      "rfm.back": "← Quay lại dự án",
      "rfm.techH": "Công nghệ sử dụng",
      "rfm.problemH": "Vấn đề",
      "rfm.problemP1": "Đội marketing đang chạy cùng một chiến dịch cuối năm cho mọi khách hàng. Khách trung thành giá trị cao nhận đúng thông điệp như tài khoản ngủ đông — lãng phí ngân sách, tương tác thấp. Họ cần chia 4,35 triệu hợp đồng khách hàng thành các nhóm có ý nghĩa để đội CSKH lên kế hoạch tiếp cận riêng cho từng nhóm.",
      "rfm.problemP2": "Một điểm mù thứ hai: những khách đã đăng ký nhưng chưa từng mua một lần nào — một nhóm hoàn toàn vô hình trong các báo cáo hiện có, đại diện cho cơ hội kích hoạt lớn chưa được khai thác.",
      "rfm.dataH": "Mô hình dữ liệu",
      "rfm.dataP1": "3 file CSV thô (5,4 triệu dòng) được tải thẳng vào Supabase và mô hình hóa theo dạng star schema, cùng 4 bảng dẫn xuất tạo bằng SQL.",
      "rfm.schemaLabel": "Lược đồ",
      "rfm.erdCap": "Sơ đồ ERD star schema — fact_trans ở trung tâm, nối với các chiều đăng ký và địa điểm.",
      "rfm.th.table": "Bảng",
      "rfm.th.rows": "Số dòng",
      "rfm.th.desc": "Mô tả",
      "rfm.th.type": "Loại",
      "rfm.row.dimloc": "Dữ liệu gốc về chi nhánh — phân cấp SubCompany → Location → Branch",
      "rfm.row.dimlocm": "Khử trùng lặp theo LocationID — tạo làm điểm neo khóa ngoại sạch vì BranchCode bị trùng trong dim_location",
      "rfm.row.dimregist": "Hợp đồng khách hàng kèm chi nhánh, trạng thái và ngày đăng ký",
      "rfm.row.facttrans": "Lịch sử giao dịch tháng 6–8/2022 (GMV theo từng khách theo ngày)",
      "rfm.row.rfmbase": "Điểm RFM + nhãn phân khúc theo từng khách — tính bằng SQL",
      "rfm.row.segstats": "Tổng hợp KPI theo phân khúc: số lượng, %, GMV trung bình, recency trung bình, tần suất trung bình",
      "rfm.row.segloc": "Phân bố phân khúc xoay theo chi nhánh — mỗi cột một phân khúc",
      "rfm.row.regnp": "Khách đã ký hợp đồng nhưng chưa từng giao dịch",
      "rfm.type.dim": "Chiều (Dimension)",
      "rfm.type.fact": "Sự kiện (Fact)",
      "rfm.type.derived": "Dẫn xuất",
      "rfm.fkH": "Các thử thách về khóa ngoại (FK) gặp phải",
      "rfm.fk1a": "Phát sinh khi tạo FK trước lúc cột đích có PRIMARY KEY. Khắc phục:",
      "rfm.fk1b": "trước.",
      "rfm.fk2a": "BranchCode lặp lại giữa các địa điểm (18 mã cho 116 chi nhánh). Giải quyết bằng cách tạo",
      "rfm.fk2b": "với",
      "rfm.fk2c": "duy nhất làm đích FK thay thế.",
      "rfm.fk3a": "~4.700 CustomerID trong",
      "rfm.fk3b": "không có bản ghi khớp trong",
      "rfm.fk3c": "Dùng",
      "rfm.fk3d": "để bỏ qua kiểm tra các dòng hiện có nhưng vẫn đảm bảo toàn vẹn cho các bản ghi chèn về sau.",
      "rfm.approachH": "Cách tiếp cận",
      "rfm.appP": "Toàn bộ logic phân tích nằm trong SQL trên Supabase — không có lớp biến đổi nào ngoài cơ sở dữ liệu.",
      "rfm.step1H": "Bước 1 — Chấm điểm RFM",
      "rfm.step1a": "Tính 3 chỉ số cho mỗi khách, chuẩn hóa theo",
      "rfm.step1b": "(số năm kể từ khi đăng ký) để không thiệt cho khách mới:",
      "rfm.m1": "số ngày kể từ lần mua gần nhất so với 01/09/2022 (thấp hơn = tốt hơn)",
      "rfm.m2": "số giao dịch ÷ tuổi hợp đồng theo năm",
      "rfm.m3": "tổng GMV ÷ tuổi hợp đồng theo năm",
      "rfm.step1c": "Mỗi chỉ số được chấm 1–4 theo ngưỡng tứ phân vị IQR — tự động tính qua hàm cửa sổ",
      "rfm.step1d": "không có ranh giới gán cứng. Kết quả lưu vào",
      "rfm.step2H": "Bước 2 — Gán nhãn phân khúc",
      "rfm.step2a": "Thêm cột",
      "rfm.step2b": "vào",
      "rfm.step2c": "qua",
      "rfm.step2d": "trên các điểm số kiểu integer. Quy tắc thứ tự quan trọng:",
      "rfm.step2e": "phải đứng trước",
      "rfm.step2f": "để không bị điều kiện rộng hơn nuốt mất.",
      "rfm.th.segment": "Phân khúc",
      "rfm.th.condition": "Điều kiện",
      "rfm.sqlH": "Các kỹ thuật SQL chính đã dùng",
      "rfm.sql1": "Dùng để xếp hạng khách theo từng chỉ số RFM, cho phép tính tứ phân vị IQR chính xác mà không cần gán cứng ngưỡng.",
      "rfm.sql2": "Hàm cửa sổ tính % trên tổng theo từng phân khúc chỉ trong một lượt truy vấn — không cần truy vấn con.",
      "rfm.sql3": "Tổng hợp có điều kiện của PostgreSQL, dùng để xoay số lượng phân khúc thành các cột theo chi nhánh — tương đương cú pháp PIVOT của SQL Server.",
      "rfm.sql4a": "Phép anti-join hiệu quả để tìm khách đã đăng ký nhưng không có giao dịch nào, tránh chi phí hiệu năng của",
      "rfm.sql4b": "trên các bảng lớn.",
      "rfm.sql5": "Vật chất hóa kết quả CTE thành các bảng cố định để Power BI kết nối trực tiếp mà không phải chạy lại các phép tổng hợp nặng mỗi lần làm mới.",
      "rfm.pbiH": "Dashboard Power BI",
      "rfm.pbiPa": "Dashboard 4 trang kết nối trực tiếp tới Supabase qua connector PostgreSQL. Nền tối",
      "rfm.pbiPb": "để tối đa hóa độ tương phản cho mã màu phân khúc.",
      "rfm.th.page": "Trang",
      "rfm.th.audience": "Đối tượng",
      "rfm.th.visuals": "Trực quan chính",
      "rfm.aud.clevel": "Cấp lãnh đạo",
      "rfm.aud.cskh": "Đội CSKH",
      "rfm.aud.regional": "Quản lý vùng",
      "rfm.aud.mkt": "Marketing",
      "rfm.vis1": "4 thẻ KPI (tổng khách, GMV, khách đang mua, % chưa từng mua) · biểu đồ donut · các chi nhánh dẫn đầu theo GMV",
      "rfm.vis2": "Ma trận có định dạng điều kiện (thang xanh cho số lượng, vàng cho GMV trung bình) · treemap cho phân bố %",
      "rfm.vis3": "Biểu đồ cột chồng 100% — LocationName × phân khúc — để lộ các chi nhánh có tỷ lệ At Risk hoặc Cannot Lose Them cao",
      "rfm.vis4": "Thẻ (tổng + %) · biểu đồ cột theo chi nhánh · biểu đồ đường xu hướng đăng ký theo thời gian",
      "rfm.shotH": "Ảnh chụp",
      "rfm.shotCap": "Dashboard Power BI 4 trang — Executive Overview, Segment Analysis, Location Performance, và Never-Purchased Customers.",
      "rfm.resultsH": "Kết quả",
      "rfm.r1": "phân khúc khách hàng trên 4,35 triệu hợp đồng",
      "rfm.r2": "bảng trong kho dữ liệu (4 thô + 4 dẫn xuất)",
      "rfm.r3": "trang Power BI bàn giao cho đội CSKH",
      "rfm.diffH": "Điều tôi sẽ làm khác đi",
      "rfm.diffPa": "Thêm bảng",
      "rfm.diffPb": "ngay từ ngày đầu — phần time-intelligence trong Power BI phải làm vòng vo khi thiếu nó. Dữ liệu giao dịch chỉ trải tháng 6–8/2022, nên một chiều thời gian đúng nghĩa sẽ mở khóa việc theo dõi cohort theo từng tháng.",
      "rfm.diffP2": "Ngoài ra, chấm điểm RFM theo IQR hoạt động tốt, nhưng vòng lặp tiếp theo sẽ so sánh với phân cụm K-Means để xác nhận ranh giới phân khúc thật sự dựa trên dữ liệu thay vì các lát cắt tứ phân vị mang tính giả định.",
      "cs.title": "Churn Prediction Pipeline",
      "cs.summary": "Một pipeline đầu-cuối chấm điểm rủi ro rời bỏ của khách hàng mỗi tuần, tự huấn luyện lại theo lịch, và cảnh báo trôi mô hình (drift) trước khi nó âm thầm làm xấu các quyết định phía sau.",
      "cs.github": "Xem trên GitHub →",
      "cs.back": "← Quay lại dự án",
      "cs.problemH": "Vấn đề",
      "cs.problemP": "Đội sản phẩm chỉ thấy được khách rời bỏ khi đã muộn — đến lúc khách hủy thì không còn kịp can thiệp. Họ cần một điểm rủi ro hướng tới tương lai, tự cập nhật và giữ độ chính xác khi hành vi khách hàng thay đổi theo thời gian.",
      "cs.approachH": "Cách tiếp cận",
      "cs.approachP": "Pipeline kéo dữ liệu sự kiện hành vi và thanh toán mỗi đêm, dựng bộ đặc trưng cuốn chiếu (suy giảm tương tác, tốc độ ticket hỗ trợ, ma sát thanh toán), và chấm điểm mọi tài khoản đang hoạt động hàng tuần bằng mô hình gradient boosting.",
      "cs.a1": "Pipeline đặc trưng chạy trên các Airflow DAG theo lịch, mỗi bước có thể chạy lại độc lập.",
      "cs.a2": "Mô hình XGBoost huấn luyện lại trên cửa sổ trượt 12 tháng, được đánh phiên bản và so sánh với mô hình đang chạy trước khi đưa lên.",
      "cs.a3": "Giám sát drift trên cả phân phối đặc trưng lẫn hiệu chỉnh dự đoán, tự động cảnh báo nếu vượt ngưỡng.",
      "cs.a4": "Tác vụ suy luận và huấn luyện lại chạy trên AWS batch compute theo lịch, kết quả ghi lại vào kho dữ liệu cho dashboard của đội CS.",
      "cs.shotH": "Ảnh chụp",
      "cs.shotCap": "Phân phối rủi ro churn hàng tuần và bộ giám sát drift, hiển thị cho đội CS.",
      "cs.resultsH": "Kết quả",
      "cs.r1": "tỷ lệ giữ chân trên các tài khoản được gắn cờ rủi ro",
      "cs.r2num": "Hàng tuần",
      "cs.r2": "nhịp chấm điểm tự động",
      "cs.r3": "lần huấn luyện lại thủ công kể từ khi ra mắt",
      "cs.diffH": "Điều tôi sẽ làm khác đi",
      "cs.diffP": "Giám sát hiệu chỉnh được thêm vào muộn hơn lẽ ra — nếu làm từ ngày đầu sẽ bắt được vấn đề drift sớm hơn. Vòng lặp tiếp theo sẽ chuyển việc tính đặc trưng sang xử lý theo luồng thay vì theo lô mỗi đêm, để rút ngắn thời gian phản hồi.",
      "cs.navBack": "← Quay lại tất cả dự án",
      "cs.navNext": "Dự án tiếp theo →"
    }
  };

  var langToggle = document.getElementById("langToggle");
  var i18nEls = document.querySelectorAll("[data-i18n], [data-i18n-html]");

  // Snapshot the original English text so switching back is lossless.
  i18nEls.forEach(function (el) {
    if (el.hasAttribute("data-i18n-html")) {
      el.setAttribute("data-en-html", el.innerHTML);
    } else {
      el.setAttribute("data-en", el.textContent);
    }
  });

  var applyLang = function (lang) {
    var dict = I18N[lang] || {};
    i18nEls.forEach(function (el) {
      var htmlKey = el.getAttribute("data-i18n-html");
      var key = el.getAttribute("data-i18n");
      if (htmlKey) {
        if (lang === "vi" && dict[htmlKey]) el.innerHTML = dict[htmlKey];
        else el.innerHTML = el.getAttribute("data-en-html");
      } else if (key) {
        if (lang === "vi" && dict[key]) el.textContent = dict[key];
        else el.textContent = el.getAttribute("data-en");
      }
    });
    document.documentElement.setAttribute("lang", lang);
    if (langToggle) {
      langToggle.classList.toggle("is-vi", lang === "vi");
      langToggle.setAttribute(
        "aria-label",
        lang === "vi" ? "Chuyển sang tiếng Anh" : "Switch to Vietnamese"
      );
    }
    try { localStorage.setItem("mn_lang", lang); } catch (e) {}
  };

  var savedLang = "en";
  try { savedLang = localStorage.getItem("mn_lang") || "en"; } catch (e) {}
  applyLang(savedLang);

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("lang") === "vi" ? "vi" : "en";
      applyLang(current === "vi" ? "en" : "vi");
    });
  }

  /* ----------------------------------------
     Mobile nav toggle
  ---------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------------------------------
     Theme toggle (light / dark)
     The initial theme is set by an inline script in <head> to avoid
     a flash; here we just handle the button and persist the choice.
  ---------------------------------------- */
  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    var syncLabel = function () {
      var isLight = document.documentElement.getAttribute("data-theme") === "light";
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
    };
    syncLabel();

    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("mn_theme", next);
      } catch (e) {}
      syncLabel();
    });
  }

  /* ----------------------------------------
     Reveal-on-scroll
  ---------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ----------------------------------------
     Side rail: build from sections, track active
     (only on pages that have the full main-page section set —
     project detail pages share some ids like #top/#contact but
     shouldn't get a broken partial rail)
  ---------------------------------------- */
  var railSectionDefs = [
    { id: "top", label: "Top" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "blog", label: "Writing" },
    { id: "contact", label: "Contact" }
  ];

  var railSections = railSectionDefs.filter(function (s) {
    return document.getElementById(s.id) !== null;
  });

  var isFullMainPage = railSections.length === railSectionDefs.length;

  if (isFullMainPage) {
    var rail = document.createElement("nav");
    rail.className = "side-rail";
    rail.setAttribute("aria-label", "Section navigation");

    var railItems = railSections.map(function (section) {
      var item = document.createElement("a");
      item.className = "side-rail-item";
      item.href = "#" + section.id;

      var label = document.createElement("span");
      label.className = "side-rail-label";
      label.textContent = section.label;

      var dash = document.createElement("span");
      dash.className = "side-rail-dash";
      dash.setAttribute("aria-hidden", "true");

      item.appendChild(label);
      item.appendChild(dash);
      item.setAttribute("data-target", section.id);

      // The "top" section is a sticky header (position: sticky; top: 0),
      // so it's already pinned at the viewport top and a plain anchor
      // jump won't visibly scroll the page. Force an explicit scroll
      // to the very top of the document instead.
      if (section.id === "top") {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          history.replaceState(null, "", "#top");
        });
      }

      rail.appendChild(item);
      return item;
    });

    document.body.appendChild(rail);

    var targetEls = railSections.map(function (s) {
      return document.getElementById(s.id);
    });

    function setActive(id) {
      railItems.forEach(function (item) {
        item.classList.toggle("is-active", item.getAttribute("data-target") === id);
      });
    }

    if ("IntersectionObserver" in window) {
      var visibleRatios = {};

      var railObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            visibleRatios[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
          });

          var bestId = null;
          var bestRatio = 0;
          Object.keys(visibleRatios).forEach(function (id) {
            if (visibleRatios[id] > bestRatio) {
              bestRatio = visibleRatios[id];
              bestId = id;
            }
          });

          if (bestId) setActive(bestId);
        },
        { threshold: [0.1, 0.25, 0.5, 0.75, 1] }
      );

      targetEls.forEach(function (el) {
        railObserver.observe(el);
      });
    }

    setActive(railSections[0].id);
  }

  /* ----------------------------------------
     Hero particle network
     Two clusters (gray + accent) drifting and linking to nearby
     same-cluster points, split by a dashed boundary curve.
     Pauses when offscreen; static if reduced-motion is preferred.
  ---------------------------------------- */
  var heroCanvas = document.getElementById("heroCanvas");
  if (heroCanvas && heroCanvas.getContext) {
    var pctx = heroCanvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var cssVal = function (name, fallback) {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name);
      return (v && v.trim()) || fallback;
    };
    var pW = 0, pH = 0, particles = [];
    var LINK = 80;
    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var buildParticles = function () {
      particles = [];
      var n = pW < 360 ? 14 : 18;
      for (var i = 0; i < n; i++) {
        var cluster = i < n / 2 ? 0 : 1;
        var x, y;
        if (cluster === 0) {
          x = Math.random() * pW * 0.42;
          y = Math.random() * pH * 0.5;
        } else {
          x = pW * 0.55 + Math.random() * pW * 0.42;
          y = pH * 0.45 + Math.random() * pH * 0.5;
        }
        particles.push({
          x: x, y: y,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 2 + Math.random() * 2.5,
          c: cluster
        });
      }
    };

    var resizeCanvas = function () {
      var rect = heroCanvas.getBoundingClientRect();
      pW = rect.width;
      pH = rect.height;
      heroCanvas.width = pW * dpr;
      heroCanvas.height = pH * dpr;
      pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    var draw = function () {
      var dotA = cssVal("--ink-dim", "#9aa3b5");
      var accent = cssVal("--accent", "#4d9fff");
      var boundary = cssVal("--ink-faint", "#5a6376");

      pctx.clearRect(0, 0, pW, pH);

      pctx.save();
      pctx.strokeStyle = boundary;
      pctx.globalAlpha = 0.5;
      pctx.lineWidth = 1;
      pctx.setLineDash([4, 6]);
      pctx.beginPath();
      pctx.moveTo(pW * 0.08, pH * 0.92);
      pctx.bezierCurveTo(pW * 0.35, pH * 0.7, pW * 0.5, pH * 0.35, pW * 0.95, pH * 0.08);
      pctx.stroke();
      pctx.restore();

      var i, j;
      if (!reduceMotion) {
        for (i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > pW) p.vx *= -1;
          if (p.y < 0 || p.y > pH) p.vy *= -1;
        }
      }

      for (i = 0; i < particles.length; i++) {
        for (j = i + 1; j < particles.length; j++) {
          var a = particles[i], b = particles[j];
          if (a.c !== b.c) continue;
          var dx = a.x - b.x, dy = a.y - b.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            pctx.strokeStyle = accent;
            pctx.globalAlpha = (1 - d / LINK) * 0.45;
            pctx.lineWidth = 0.6;
            pctx.beginPath();
            pctx.moveTo(a.x, a.y);
            pctx.lineTo(b.x, b.y);
            pctx.stroke();
          }
        }
      }

      pctx.globalAlpha = 1;
      for (i = 0; i < particles.length; i++) {
        var pt = particles[i];
        pctx.beginPath();
        pctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        pctx.fillStyle = pt.c === 0 ? dotA : accent;
        pctx.fill();
      }
    };

    var rafId = null;
    var running = false;
    var loop = function () {
      draw();
      rafId = requestAnimationFrame(loop);
    };
    var start = function () {
      if (running || reduceMotion) return;
      running = true;
      loop();
    };
    var stop = function () {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    resizeCanvas();
    draw();

    var rzTimer;
    window.addEventListener("resize", function () {
      clearTimeout(rzTimer);
      rzTimer = setTimeout(resizeCanvas, 200);
    });

    if (reduceMotion) {
      draw();
    } else if ("IntersectionObserver" in window) {
      var heroObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) start();
            else stop();
          });
        },
        { threshold: 0.05 }
      );
      heroObs.observe(heroCanvas);
    } else {
      start();
    }
  }

  /* ----------------------------------------
     Visitor count (local, session-based placeholder)
  ---------------------------------------- */
  var visitorCountEl = document.getElementById("visitorCount");
  if (visitorCountEl) {
    var count = 1;
    try {
      var stored = sessionStorage.getItem("mn_visitor_count");
      count = stored ? parseInt(stored, 10) + 1 : Math.floor(Math.random() * 50) + 120;
      sessionStorage.setItem("mn_visitor_count", String(count));
    } catch (e) {
      count = Math.floor(Math.random() * 50) + 120;
    }
    visitorCountEl.textContent = count;
  }
})();