// 정확한 예산과목 데이터 (최종 업데이트)
const budgetList = [
    // [매]동력비
    { category: "[매]동력비", detail: "[매]동력비", project: "철도차량 동력비 및 역사전기요금" },
    { category: "[매]동력비", detail: "[매]동력비", project: "차량기지 동력비" },

    // [매]수선유지비
    { category: "[매]수선유지비", detail: "[매]수선유지비", project: "동탄검수고 유지보수" },
    { category: "[매]수선유지비", detail: "[매]수선유지비", project: "기술분야 상시 보수 등" },
    { category: "[매]수선유지비", detail: "[매]수선유지비", project: "안전플랫폼 감시시스템" },
    { category: "[매]수선유지비", detail: "[매]수선유지비", project: "전동차 수선유지비" },
    { category: "[매]수선유지비", detail: "[매]수선유지비", project: "시설물 수선유지비" },

    // [매]위탁관리비
    { category: "[매]위탁관리비", detail: "[매]위탁관리비", project: "차량분야 정비위탁 용역비" },
    { category: "[매]위탁관리비", detail: "[매]위탁관리비", project: "AFC 시스템 유지보수 용역" },
    { category: "[매]위탁관리비", detail: "[매]위탁관리비", project: "전차선로 유지관리 위탁용역" },
    { category: "[매]위탁관리비", detail: "[매]위탁관리비", project: "운정차량기지 경비 및 시설관리" },

    // [매]교육훈련비
    { category: "[매]교육훈련비", detail: "[매]교육훈련비", project: "기술분야 전문교육" },
    { category: "[매]교육훈련비", detail: "[매]교육훈련비", project: "철도차량 정비 기술교육" },
    { category: "[매]교육훈련비", detail: "[매]교육훈련비", project: "철도학회 참석 등" },

    // [매]관서업무비
    { category: "[매]관서업무비", detail: "[매]관서업무비", project: "부서운영업무비" },
    { category: "[매]관서업무비", detail: "[매]관서업무비", project: "부서운영업무비(기술)" },
    { category: "[매]관서업무비", detail: "[매]관서업무비", project: "부서운영업무비(차량)" },

    // [매]일반운영비 - 소모품비
    { category: "[매]일반운영비", detail: "[매]소모품비", project: "행정,전산소모품" },
    { category: "[매]일반운영비", detail: "[매]소모품비", project: "차량 소모품, 정비 소모품 등" },
    { category: "[매]일반운영비", detail: "[매]소모품비", project: "안전용품 관리운영" },
    { category: "[매]일반운영비", detail: "[매]소모품비", project: "기술 소모품" },
    { category: "[매]일반운영비", detail: "[매]소모품비", project: "행정,전산소모품(기술)" },
    { category: "[매]일반운영비", detail: "[매]소모품비", project: "행정,전산소모품(차량)" },
    { category: "[매]일반운영비", detail: "[매]소모품비", project: "안전용품 관리운영(기술)" },
    { category: "[매]일반운영비", detail: "[매]소모품비", project: "안전용품 관리운영(차량)" },

    // [매]일반운영비 - 임차료
    { category: "[매]일반운영비", detail: "[매]임차료", project: "정수기 등 렌탈" },
    { category: "[매]일반운영비", detail: "[매]임차료", project: "복합기 임차료" },
    { category: "[매]일반운영비", detail: "[매]임차료", project: "업무용차량 임차료" },

    // [매]일반운영비 - 도서인쇄비
    { category: "[매]일반운영비", detail: "[매]도서인쇄비", project: "제본 및 인쇄비용 등" },
    { category: "[매]일반운영비", detail: "[매]도서인쇄비", project: "도서구입비" },

    // [매]일반운영비 - 지급수수료
    { category: "[매]일반운영비", detail: "[매]지급수수료", project: "세탁비" },
    { category: "[매]일반운영비", detail: "[매]지급수수료", project: "적성검사비" },
    { category: "[매]일반운영비", detail: "[매]지급수수료", project: "철도시설사용료" },
    { category: "[매]일반운영비", detail: "[매]지급수수료", project: "철도차량임대료" },
    { category: "[매]일반운영비", detail: "[매]지급수수료", project: "각종 제수수료 등" },
    { category: "[매]일반운영비", detail: "[매]지급수수료", project: "철도차량 RTD 유심 발급비용" },

    // [매]일반운영비 - 회의비
    { category: "[매]일반운영비", detail: "[매]회의비", project: "업무 회의비" },

    // [매]일반운영비 - 통신료
    { category: "[매]일반운영비", detail: "[매]통신료", project: "업무용통신비 지원" },
    { category: "[매]일반운영비", detail: "[매]통신료", project: "철도차량 RTD 유심 통신요금" },
    { category: "[매]일반운영비", detail: "[매]통신료", project: "통신회선사용료" },

    // [매]일반운영비 - 세금과공과
    { category: "[매]일반운영비", detail: "[매]세금과공과", project: "맨홀점검 도로점용비" },
    { category: "[매]일반운영비", detail: "[매]세금과공과", project: "통신분야 등록면허세 및 전파사용료" },
    { category: "[매]일반운영비", detail: "[매]세금과공과", project: "업무용차량 자동차세 등" },

    // [매]일반운영비 - 보험료
    { category: "[매]일반운영비", detail: "[매]보험료", project: "업무용 차량 보험료" },

    // [매]일반운영비 - 차량유지비
    { category: "[매]일반운영비", detail: "[매]차량유지비", project: "업무용 차량 및 철도차량 유지비 등" },

    // [매]여비
    { category: "[매]여비", detail: "[매]여비", project: "국내출장" },
    { category: "[매]여비", detail: "[매]여비", project: "사고/장애 출동 택시비" },

    // [판]교육훈련비
    { category: "[판]교육훈련비", detail: "[판]교육훈련비", project: "기술분야 전문교육" },

    // [판]업무추진비
    { category: "[판]업무추진비", detail: "[판]업무추진비", project: "처장 및 부서 업무추진비" },

    // [판]관서업무비
    { category: "[판]관서업무비", detail: "[판]관서업무비", project: "부서운영업무비" },
    { category: "[판]관서업무비", detail: "[판]관서업무비", project: "처장 정원가산업무비" },

    // [판]일반운영비 - 소모품비
    { category: "[판]일반운영비", detail: "[판]소모품비", project: "행정,전산소모품" },
    { category: "[판]일반운영비", detail: "[판]소모품비", project: "기술분야 소모품 등" },

    // [판]일반운영비 - 임차료
    { category: "[판]일반운영비", detail: "[판]임차료", project: "복합기 임차료" },

    // [판]일반운영비 - 도서인쇄비
    { category: "[판]일반운영비", detail: "[판]도서인쇄비", project: "제본 및 인쇄비용 등" },
    { category: "[판]일반운영비", detail: "[판]도서인쇄비", project: "도서구입비" },

    // [판]일반운영비 - 지급수수료
    { category: "[판]일반운영비", detail: "[판]지급수수료", project: "세탁비" },
    { category: "[판]일반운영비", detail: "[판]지급수수료", project: "외부전문가 자문" },
    { category: "[판]일반운영비", detail: "[판]지급수수료", project: "구독료" },
    { category: "[판]일반운영비", detail: "[판]지급수수료", project: "이용수수료 등" },
    { category: "[판]일반운영비", detail: "[판]지급수수료", project: "철도차량 부품 운송비" },

    // [판]일반운영비 - 회의비
    { category: "[판]일반운영비", detail: "[판]회의비", project: "업무 회의비" },

    // [판]일반운영비 - 통신료
    { category: "[판]일반운영비", detail: "[판]통신료", project: "업무용통신비 지원" },
    { category: "[판]일반운영비", detail: "[판]통신료", project: "통신료" },

    // [판]일반운영비 - 협회비
    { category: "[판]일반운영비", detail: "[판]협회비", project: "통신전자분야 협회비" },
    { category: "[판]일반운영비", detail: "[판]협회비", project: "전기분야 협회비" },

    // [판]여비
    { category: "[판]여비", detail: "[판]여비", project: "국내출장" },

    // [자]저장품
    { category: "[자]저장품", detail: "[자]저장품", project: "기술분야 저장품" },
    { category: "[자]저장품", detail: "[자]저장품", project: "차량분야 저장품" },

    // [자]공기구비품
    { category: "[자]공기구비품", detail: "[자]공기구비품", project: "공기구비품" },
    { category: "[자]공기구비품", detail: "[자]공기구비품", project: "차량분야 공기구비품" },
    { category: "[자]공기구비품", detail: "[자]공기구비품", project: "사무용가구" },

    // [자]차량운반구
    { category: "[자]차량운반구", detail: "[자]차량운반구", project: "업무용차량 구매" },

    // [자]시설장치
    { category: "[자]시설장치", detail: "[자]시설장치", project: "차량기지 자동저장 창고시스템" },

    // [자]보증금
    { category: "[자]보증금", detail: "[자]보증금", project: "철도차량 RTD 유심 보증금" }
];

let uploadedImage = null;
let selectedBudgetPath = "";

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
    initializeBudgetDropdown();
});

// 이벤트 리스너 설정
function setupEventListeners() {
    const receiptInput = document.getElementById('receiptImage');
    const uploadArea = document.getElementById('uploadArea');

    // 파일 선택 이벤트
    receiptInput.addEventListener('change', handleImageUpload);

    // 드래그 앤 드롭
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#667eea';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '#cbd5e1';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#cbd5e1';
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            receiptInput.files = files;
            handleImageUpload({ target: receiptInput });
        }
    });
}

// 예산과목 드롭다운 초기화 (단일 드롭다운)
function initializeBudgetDropdown() {
    const budgetSelect = document.getElementById('budgetCategory');

    // 드롭다운에 옵션 추가
    budgetSelect.innerHTML = '<option value="">예산과목/세목/사업 선택</option>';

    budgetList.forEach(item => {
        const option = document.createElement('option');
        const fullPath = `${item.category}/${item.detail}/${item.project}`;
        option.value = fullPath;
        option.textContent = fullPath;
        budgetSelect.appendChild(option);
    });

    // 선택 이벤트
    budgetSelect.addEventListener('change', function () {
        selectedBudgetPath = this.value;
    });
}

// 이미지 업로드 처리
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        uploadedImage = e.target.result;
        showPreview(e.target.result);
    };
    reader.readAsDataURL(file);
}

// 이미지 미리보기 표시
function showPreview(imageData) {
    const uploadArea = document.getElementById('uploadArea');
    const previewArea = document.getElementById('previewArea');
    const previewImage = document.getElementById('receiptPreview');

    uploadArea.style.display = 'none';
    previewArea.style.display = 'block';
    previewImage.src = imageData;
}

// 이미지 변경
function changeImage() {
    const uploadArea = document.getElementById('uploadArea');
    const previewArea = document.getElementById('previewArea');

    previewArea.style.display = 'none';
    uploadArea.style.display = 'block';

    document.getElementById('receiptImage').value = '';
    uploadedImage = null;
}

// 알림 표시
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#4ade80' : '#ef4444'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
        font-size: 0.9rem;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 양식 초기화
function resetForm() {
    if (!confirm('입력한 내용을 모두 삭제하시겠습니까?')) {
        return;
    }

    document.getElementById('usageDate').value = '';
    document.getElementById('budgetCategory').value = '';
    document.getElementById('userName').value = '';
    document.getElementById('paymentDetails').value = '';
    document.getElementById('approvalDate').value = '';
    document.getElementById('approvalAmount').value = '';

    selectedBudgetPath = '';
    changeImage();
}

// PDF 다운로드
async function downloadPDF() {
    // 필수 입력 검증
    const requiredFields = {
        'usageDate': '사용일자',
        'budgetCategory': '예산과목/세목/사업',
        'userName': '사용자',
        'paymentDetails': '지급내역',
        'approvalDate': '품의일자',
        'approvalAmount': '품의금액'
    };

    for (const [field, label] of Object.entries(requiredFields)) {
        if (!document.getElementById(field).value) {
            alert(`${label}를 입력해주세요.`);
            document.getElementById(field).focus();
            return;
        }
    }

    if (!uploadedImage) {
        alert('영수증 이미지를 업로드해주세요.');
        return;
    }

    // PDF 콘텐츠 준비
    preparePDFContent();

    // 임시 컨테이너 생성 (화면에 보이지만 가려지게)
    // 모바일에서도 A4 크기를 강제로 확보하기 위해 body에 직접 추가
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.top = '0';
    tempContainer.style.left = '-10000px'; // 화면 밖으로 이동
    tempContainer.style.width = '794px'; // A4 width @ 96dpi (210mm)
    tempContainer.style.height = '1123px'; // A4 height @ 96dpi (297mm)
    tempContainer.style.background = 'white';
    tempContainer.style.zIndex = '-9999';

    // PDF 페이지 복사
    const originalPage = document.querySelector('.pdf-page');
    const clonedPage = originalPage.cloneNode(true);

    // 복사된 페이지의 스타일 강제 지정 (반응형 무시)
    clonedPage.style.width = '100%';
    clonedPage.style.height = '100%';
    clonedPage.style.margin = '0';
    clonedPage.style.padding = '0';
    clonedPage.style.border = '2px solid #000';

    tempContainer.appendChild(clonedPage);
    document.body.appendChild(tempContainer);

    try {
        // html2canvas로 캡처
        const canvas = await html2canvas(clonedPage, {
            scale: 2, // 고해상도
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            width: 794,
            height: 1123,
            windowWidth: 1920, // 데스크탑 환경 시뮬레이션
            windowHeight: 1080
        });

        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;

        // A4 크기로 PDF 생성
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // 이미지를 페이지에 꽉 차게 삽입
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);

        // 파일명 생성 (법인카드영수증_YY.MM.DD.pdf)
        const dateStr = document.getElementById('usageDate').value; // YYYY-MM-DD
        const formattedDate = dateStr.substring(2).replace(/-/g, '.'); // YY.MM.DD
        const filename = `법인카드영수증_${formattedDate}.pdf`;

        pdf.save(filename);

        showNotification('PDF가 성공적으로 다운로드되었습니다!', 'success');
    } catch (error) {
        console.error('PDF 생성 에러:', error);
        showNotification('PDF 생성 중 오류가 발생했습니다.', 'error');
    } finally {
        // 임시 컨테이너 제거
        document.body.removeChild(tempContainer);
        document.getElementById('pdfContent').style.display = 'none';
    }
}

// 이미지 다운로드 (모바일 사진첩용)
async function downloadImage() {
    // 필수 입력 검증
    const requiredFields = {
        'usageDate': '사용일자',
        'budgetCategory': '예산과목/세목/사업',
        'userName': '사용자',
        'paymentDetails': '지급내역',
        'approvalDate': '품의일자',
        'approvalAmount': '품의금액'
    };

    for (const [field, label] of Object.entries(requiredFields)) {
        if (!document.getElementById(field).value) {
            alert(`${label}를 입력해주세요.`);
            document.getElementById(field).focus();
            return;
        }
    }

    if (!uploadedImage) {
        alert('영수증 이미지를 업로드해주세요.');
        return;
    }

    // PDF 콘텐츠 준비
    preparePDFContent();

    // 임시 컨테이너 생성
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.top = '0';
    tempContainer.style.left = '-10000px';
    tempContainer.style.width = '794px';
    tempContainer.style.height = '1123px';
    tempContainer.style.background = 'white';
    tempContainer.style.zIndex = '-9999';

    // PDF 페이지 복사
    const originalPage = document.querySelector('.pdf-page');
    const clonedPage = originalPage.cloneNode(true);

    // 복사된 페이지의 스타일 강제 지정
    clonedPage.style.width = '100%';
    clonedPage.style.height = '100%';
    clonedPage.style.margin = '0';
    clonedPage.style.padding = '0';
    clonedPage.style.border = '2px solid #000';

    tempContainer.appendChild(clonedPage);
    document.body.appendChild(tempContainer);

    try {
        const canvas = await html2canvas(clonedPage, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            width: 794,
            height: 1123,
            windowWidth: 1920,
            windowHeight: 1080
        });

        // Canvas를 Blob으로 변환
        canvas.toBlob(function (blob) {
            const dateStr = document.getElementById('usageDate').value;
            const formattedDate = dateStr.substring(2).replace(/-/g, '.');
            const filename = `법인카드영수증_${formattedDate}.png`;

            // 다운로드 링크 생성
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            showNotification('이미지가 성공적으로 다운로드되었습니다!', 'success');
        }, 'image/png');
    } catch (error) {
        console.error('이미지 생성 에러:', error);
        showNotification('이미지 생성 중 오류가 발생했습니다.', 'error');
    } finally {
        document.body.removeChild(tempContainer);
        document.getElementById('pdfContent').style.display = 'none';
    }
}

// PDF 콘텐츠 준비
function preparePDFContent() {
    // 영수증 이미지
    document.getElementById('pdfReceiptImage').src = uploadedImage;

    // 양식 데이터
    document.getElementById('pdfCardNumber').textContent = document.getElementById('cardNumber').value;
    document.getElementById('pdfUsageDate').textContent = formatDate(document.getElementById('usageDate').value);
    document.getElementById('pdfBudgetCategory').textContent = document.getElementById('budgetCategory').value;
    document.getElementById('pdfDepartment').textContent = document.getElementById('department').value;
    document.getElementById('pdfUserName').textContent = document.getElementById('userName').value;
    document.getElementById('pdfPaymentDetails').textContent = document.getElementById('paymentDetails').value;
    document.getElementById('pdfApprovalDate').textContent = formatDate(document.getElementById('approvalDate').value);
    document.getElementById('pdfApprovalAmount').textContent = document.getElementById('approvalAmount').value;
}

// 날짜 포맷팅 (YYYY-MM-DD -> YYYY.MM.DD)
function formatDate(dateStr) {
    if (!dateStr) return '';
    return dateStr.replace(/-/g, '.');
}
