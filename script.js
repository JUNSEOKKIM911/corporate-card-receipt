// 예산과목 데이터 (3단계 구조: 예산과목 → 세목 → 사업)
const budgetData = {
    "[매]동력비": {
        "[매]동력비": [
            "철도차량 동력비 및 역사전기요금"
        ]
    },
    "[예]운영비": {
        "[예]건물관리비": [
            "건물 유지관리"
        ],
        "[예]리스료": [
            "간이역사리스료"
        ],
        "[예]보안비": [
            "정거장경비"
        ],
        "[예]세금과공과": [
            "각종 세금 및 부과금",
            "차량보험료",
            "안전인증수수료"
        ],
        "[예]수선비": [
            "건축물 수선비",
            "시설물 유지관리 보수비"
        ],
        "[예]여비": [
            "국내여비",
            "외국여비"
        ],
        "[예]업무추진비": [
            "(예)*업무추진비"
        ],
        "[예]용역비": [
            "시설물 용역비(세무 외)"
        ],
        "[예]임차료": [
            "통신비",
            "건물 임차료"
        ],
        "[예]차량비": [
            "회의 교통비"
        ],
        "[예]지급수수료": [
            "은행수수료"
        ]
    },
    "[비]복리후생비": {
        "[비]복리후생비": [
            "기타 복리비",
            "건강 및 의료비",
            "식비 및 피복비"
        ]
    },
    "간접노무비": {
        "간접노무비": [
            "간접노무비정산"
        ]
    },
    "교육훈련비": {
        "교육훈련비": [
            "교육훈련사업비",
            "교육훈련위탁비"
        ]
    },
    "기타": {
        "간접경비": [
            "간접노무비 정산",
            "일반관리비 정산"
        ],
        "일반관리비": [
            "(일)*총급여",
            "(일)*복리후생비",
            "(일)*보험료",
            "(일)*수선비",
            "(일)*감가상각비"
        ]
    },
    "노조운영비": {
        "노조운영비": [
            "소모품비",
            "업무추진비"
        ]
    },
    "도시철도차량": {
        "도시철도차량": [
            "도시철도 차량구입"
        ]
    },
    "복리시설운영비": {
        "복리시설운영비": [
            "복리시설 유지관리"
        ]
    },
    "사무관리비": {
        "사무관리비": [
            "사무실 운영관리비",
            "사무용품비"
        ]
    },
    "승강설비유지관리비": {
        "승강설비유지관리비": [
            "승강설비 수선비",
            "E/L외주수선비",
            "E/L용역비"
        ]
    },
    "여비": {
        "여비": [
            "여비"
        ]
    },
    "용역비": {
        "용역비": [
            "일반용역비"
        ]
    },
    "임차료": {
        "임차료": [
            "임차료"
        ]
    },
    "재료비": {
        "재료비": [
            "일반 재료비"
        ]
    },
    "전산개발비": {
        "전산개발비": [
            "전산장비 구축 및 시스템 개발"
        ]
    },
    "차량사업소운영비": {
        "차량사업소운영비": [
            "차량정비 일반재료비",
            "차량정비 기타 소모품비",
            "차량검수 일반재료비",
            "차량사업소 일반운영비",
            "차량사업소 일반관리운영비",
            "차량점검 재료비 및 소모품비",
            "차량부품 및 자재관리비"
        ]
    },
    "차량유지관리비": {
        "차량유지관리비": [
            "차량동력비",
            "차량검사비",
            "차량자재비"
        ]
    },
    "통신비": {
        "통신비": [
            "통신비"
        ]
    },
    "회의비": {
        "회의비": [
            "회의비",
            "전문가 자문비"
        ]
    }
};

let uploadedImage = null;
let ocrData = null;
let selectedBudgetPath = {
    category: '',
    detail: '',
    project: ''
};

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
    initializeBudgetDropdowns();
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

// 예산과목 드롭다운 초기화
function initializeBudgetDropdowns() {
    const categorySelect = document.getElementById('budgetCategory');
    const detailSelect = document.getElementById('budgetDetail');
    const projectSelect = document.getElementById('budgetProject');

    // 예산과목 드롭다운 채우기
    populateCategoryDropdown();

    // 예산과목 변경 이벤트
    categorySelect.addEventListener('change', function () {
        selectedBudgetPath.category = this.value;
        selectedBudgetPath.detail = '';
        selectedBudgetPath.project = '';
        populateDetailDropdown(this.value);
        resetProjectDropdown();
    });

    // 세목 변경 이벤트
    detailSelect.addEventListener('change', function () {
        selectedBudgetPath.detail = this.value;
        selectedBudgetPath.project = '';
        populateProjectDropdown(selectedBudgetPath.category, this.value);
    });

    // 사업 변경 이벤트
    projectSelect.addEventListener('change', function () {
        selectedBudgetPath.project = this.value;
    });
}

// 예산과목 드롭다운 채우기
function populateCategoryDropdown() {
    const categorySelect = document.getElementById('budgetCategory');
    categorySelect.innerHTML = '<option value="">예산과목 선택</option>';

    Object.keys(budgetData).sort().forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// 세목 드롭다운 채우기
function populateDetailDropdown(category) {
    const detailSelect = document.getElementById('budgetDetail');
    detailSelect.innerHTML = '<option value="">세목 선택</option>';
    detailSelect.disabled = false;

    if (category && budgetData[category]) {
        Object.keys(budgetData[category]).sort().forEach(detail => {
            const option = document.createElement('option');
            option.value = detail;
            option.textContent = detail;
            detailSelect.appendChild(option);
        });
    }
}

// 사업 드롭다운 채우기
function populateProjectDropdown(category, detail) {
    const projectSelect = document.getElementById('budgetProject');
    projectSelect.innerHTML = '<option value="">사업(세부사업) 선택</option>';
    projectSelect.disabled = false;

    if (category && detail && budgetData[category] && budgetData[category][detail]) {
        budgetData[category][detail].sort().forEach(project => {
            const option = document.createElement('option');
            option.value = project;
            option.textContent = project;
            projectSelect.appendChild(option);
        });
    }
}

// 사업 드롭다운 초기화
function resetProjectDropdown() {
    const projectSelect = document.getElementById('budgetProject');
    projectSelect.innerHTML = '<option value="">사업(세부사업) 선택</option>';
    projectSelect.disabled = true;
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
        performOCR(e.target.result);
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
    const ocrStatus = document.getElementById('ocrStatus');

    previewArea.style.display = 'none';
    ocrStatus.style.display = 'none';
    uploadArea.style.display = 'block';

    document.getElementById('receiptImage').value = '';
    uploadedImage = null;
}

// OCR 수행
async function performOCR(imageData) {
    const ocrStatus = document.getElementById('ocrStatus');
    ocrStatus.style.display = 'block';

    try {
        const worker = await Tesseract.createWorker('kor');
        const { data } = await worker.recognize(imageData);
        ocrData = data.text;

        console.log('OCR 결과:', ocrData);

        // 날짜와 금액 추출
        extractDataFromOCR(ocrData);

        await worker.terminate();
        ocrStatus.style.display = 'none';

        // 성공 메시지
        showNotification('영수증 분석이 완료되었습니다!', 'success');
    } catch (error) {
        console.error('OCR 에러:', error);
        ocrStatus.style.display = 'none';
        showNotification('영수증 분석 중 오류가 발생했습니다. 수동으로 입력해주세요.', 'error');
    }
}

// OCR 데이터에서 날짜와 금액 추출
function extractDataFromOCR(text) {
    // 날짜 패턴 추출 (2025.12.4, 2025-12-04, 20251204 등)
    const datePatterns = [
        /(\d{4})[.\-\/](\d{1,2})[.\-\/](\d{1,2})/,
        /(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/,
        /(\d{4})(\d{2})(\d{2})/
    ];

    for (const pattern of datePatterns) {
        const match = text.match(pattern);
        if (match) {
            const year = match[1];
            const month = match[2].padStart(2, '0');
            const day = match[3].padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;
            document.getElementById('usageDate').value = dateStr;
            break;
        }
    }

    // 금액 패턴 추출 (30,000원, 30000원, 30,000 등)
    const amountPatterns = [
        /(?:합계|총액|금액|결제금액)?\s*[:：]?\s*([\d,]+)\s*원/,
        /(?:총\s*액|합\s*계).*?([\d,]+)/,
        /([\d,]+)\s*원/
    ];

    let maxAmount = 0;
    for (const pattern of amountPatterns) {
        const matches = text.matchAll(new RegExp(pattern, 'g'));
        for (const match of matches) {
            const amountStr = match[1].replace(/,/g, '');
            const amount = parseInt(amountStr);
            if (!isNaN(amount) && amount > maxAmount && amount < 10000000) {
                maxAmount = amount;
            }
        }
    }

    if (maxAmount > 0) {
        document.getElementById('approvalAmount').value = maxAmount.toLocaleString() + '원';
    }
}

// 알림 표시
function showNotification(message, type = 'info') {
    // 간단한 알림 구현
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
    document.getElementById('budgetDetail').value = '';
    document.getElementById('budgetProject').value = '';
    document.getElementById('budgetDetail').disabled = true;
    document.getElementById('budgetProject').disabled = true;
    document.getElementById('userName').value = '';
    document.getElementById('paymentDetails').value = '';
    document.getElementById('approvalDate').value = '';
    document.getElementById('approvalAmount').value = '';

    selectedBudgetPath = { category: '', detail: '', project: '' };
    changeImage();
}

// PDF 다운로드
async function downloadPDF() {
    // 필수 입력 검증
    const requiredFields = {
        'usageDate': '사용일자',
        'budgetCategory': '예산과목',
        'budgetDetail': '세목',
        'budgetProject': '사업(세부사업)',
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

    // PDF 생성
    const pdfContent = document.getElementById('pdfContent');
    pdfContent.style.display = 'block';

    try {
        const canvas = await html2canvas(pdfContent, {
            scale: 2,
            useCORS: true,
            logging: false
        });

        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const imgWidth = 210; // A4 폭
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        // 파일명 생성 (날짜_사용자명)
        const usageDate = document.getElementById('usageDate').value.replace(/-/g, '');
        const userName = document.getElementById('userName').value;
        const filename = `법인카드영수증_${usageDate}_${userName}.pdf`;

        pdf.save(filename);

        showNotification('PDF가 성공적으로 다운로드되었습니다!', 'success');
    } catch (error) {
        console.error('PDF 생성 에러:', error);
        showNotification('PDF 생성 중 오류가 발생했습니다.', 'error');
    } finally {
        pdfContent.style.display = 'none';
    }
}

// PDF 콘텐츠 준비
function preparePDFContent() {
    // 영수증 이미지
    document.getElementById('pdfReceiptImage').src = uploadedImage;

    // 양식 데이터
    document.getElementById('pdfCardNumber').textContent = document.getElementById('cardNumber').value;
    document.getElementById('pdfUsageDate').textContent = formatDate(document.getElementById('usageDate').value);

    // 예산과목 전체 경로
    const category = document.getElementById('budgetCategory').value;
    const detail = document.getElementById('budgetDetail').value;
    const project = document.getElementById('budgetProject').value;
    document.getElementById('pdfBudgetCategory').textContent = `${category}/${detail}/${project}`;

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
