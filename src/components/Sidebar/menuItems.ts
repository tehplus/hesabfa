import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Inventory as InventoryIcon,
    AccountBalance as AccountBalanceIcon,
    PointOfSale as PointOfSaleIcon,
    ShoppingCart as ShoppingCartIcon,
    Warehouse as WarehouseIcon,
    AccountBalanceWallet as AccountBalanceWalletIcon,
    More as MoreIcon,
    Assessment as AssessmentIcon,
    Settings as SettingsIcon
} from '@mui/icons-material';
import { MenuItem } from '../../types';

export const menuItems: MenuItem[] = [
    {
        id: 'dashboard',
        title: 'داشبورد',
        path: '/',
        icon: DashboardIcon
    },
    {
        id: 'persons',
        title: 'اشخاص',
        icon: PeopleIcon,
        children: [
            {
                id: 'new-person',
                title: 'شخص جدید',
                path: '/persons/new'
            },
            {
                id: 'persons-list',
                title: 'اشخاص',
                path: '/persons'
            },
            {
                id: 'receive',
                title: 'دریافت',
                path: '/persons/receive'
            },
            {
                id: 'receive-list',
                title: 'لیست دریافت ها',
                path: '/persons/receives'
            },
            {
                id: 'payment',
                title: 'پرداخت',
                path: '/persons/payment'
            },
            {
                id: 'payment-list',
                title: 'لیست پرداخت ها',
                path: '/persons/payments'
            },
            {
                id: 'shareholders',
                title: 'سهامداران',
                path: '/persons/shareholders'
            },
            {
                id: 'vendors',
                title: 'فروشندگان',
                path: '/persons/vendors'
            }
        ]
    },
    {
        id: 'products',
        title: 'کالاها و خدمات',
        icon: InventoryIcon,
        children: [
            {
                id: 'new-product',
                title: 'کالای جدید',
                path: '/products/new'
            },
            {
                id: 'new-service',
                title: 'خدمات جدید',
                path: '/services/new'
            },
            {
                id: 'products-list',
                title: 'کالاها و خدمات',
                path: '/products'
            },
            {
                id: 'price-list-update',
                title: 'به روز رسانی لیست قیمت',
                path: '/products/price-update'
            },
            {
                id: 'barcode-print',
                title: 'چاپ بارکد',
                path: '/products/barcode'
            },
            {
                id: 'barcode-print-multiple',
                title: 'چاپ بارکد تعدادی',
                path: '/products/barcode-multiple'
            },
            {
                id: 'price-list',
                title: 'صفحه لیست قیمت کالا',
                path: '/products/price-list'
            }
        ]
    },
    {
        id: 'banking',
        title: 'بانکداری',
        icon: AccountBalanceIcon,
        children: [
            {
                id: 'banks',
                title: 'بانک‌ها',
                path: '/banking/banks'
            },
            {
                id: 'funds',
                title: 'صندوق‌ها',
                path: '/banking/funds'
            },
            {
                id: 'petty-cash',
                title: 'تنخواه‌گردان‌ها',
                path: '/banking/petty-cash'
            },
            {
                id: 'transfer',
                title: 'انتقال',
                path: '/banking/transfer'
            },
            {
                id: 'transfers-list',
                title: 'لیست انتقال‌ها',
                path: '/banking/transfers'
            },
            {
                id: 'received-checks',
                title: 'لیست چک‌های دریافتی',
                path: '/banking/received-checks'
            },
            {
                id: 'paid-checks',
                title: 'لیست چک‌های پرداختی',
                path: '/banking/paid-checks'
            }
        ]
    },
    {
        id: 'sales',
        title: 'فروش و درآمد',
        icon: PointOfSaleIcon,
        children: [
            {
                id: 'new-sale',
                title: 'فروش جدید',
                path: '/sales/new'
            },
            {
                id: 'quick-invoice',
                title: 'فاکتور سریع',
                path: '/sales/quick'
            },
            {
                id: 'sale-return',
                title: 'برگشت از فروش',
                path: '/sales/return'
            },
            {
                id: 'sale-invoices',
                title: 'فاکتورهای فروش',
                path: '/sales/invoices'
            },
            {
                id: 'sale-return-invoices',
                title: 'فاکتورهای برگشت از فروش',
                path: '/sales/return-invoices'
            },
            {
                id: 'income',
                title: 'درآمد',
                path: '/sales/income'
            },
            {
                id: 'income-list',
                title: 'لیست درآمدها',
                path: '/sales/incomes'
            },
            {
                id: 'installment-sale',
                title: 'قرارداد فروش اقساطی',
                path: '/sales/installment'
            },
            {
                id: 'installment-sale-list',
                title: 'لیست فروش اقساطی',
                path: '/sales/installments'
            },
            {
                id: 'discounted-items',
                title: 'اقلام تخفیف دار',
                path: '/sales/discounted'
            }
        ]
    },
    {
        id: 'purchases',
        title: 'خرید و هزینه',
        icon: ShoppingCartIcon,
        children: [
            {
                id: 'new-purchase',
                title: 'خرید جدید',
                path: '/purchases/new'
            },
            {
                id: 'purchase-return',
                title: 'برگشت از خرید',
                path: '/purchases/return'
            },
            {
                id: 'purchase-invoices',
                title: 'فاکتورهای خرید',
                path: '/purchases/invoices'
            },
            {
                id: 'purchase-return-invoices',
                title: 'فاکتورهای برگشت از خرید',
                path: '/purchases/return-invoices'
            },
            {
                id: 'expense',
                title: 'هزینه',
                path: '/purchases/expense'
            },
            {
                id: 'expense-list',
                title: 'لیست هزینه‌ها',
                path: '/purchases/expenses'
            },
            {
                id: 'waste',
                title: 'ضایعات',
                path: '/purchases/waste'
            },
            {
                id: 'waste-list',
                title: 'لیست ضایعات',
                path: '/purchases/wastes'
            }
        ]
    },
    {
        id: 'warehouse',
        title: 'انبارداری',
        icon: WarehouseIcon,
        children: [
            {
                id: 'warehouses',
                title: 'انبارها',
                path: '/warehouse/list'
            },
            {
                id: 'new-transfer',
                title: 'حواله جدید',
                path: '/warehouse/transfer/new'
            },
            {
                id: 'transfers',
                title: 'رسید و حواله‌های انبار',
                path: '/warehouse/transfers'
            },
            {
                id: 'inventory',
                title: 'موجودی کالا',
                path: '/warehouse/inventory'
            },
            {
                id: 'all-warehouses-inventory',
                title: 'موجودی تمامی انبارها',
                path: '/warehouse/all-inventory'
            },
            {
                id: 'stocktaking',
                title: 'انبارگردانی',
                path: '/warehouse/stocktaking'
            }
        ]
    },
    {
        id: 'accounting',
        title: 'حسابداری',
        icon: AccountBalanceWalletIcon,
        children: [
            {
                id: 'new-document',
                title: 'سند جدید',
                path: '/accounting/document/new'
            },
            {
                id: 'documents-list',
                title: 'لیست اسناد',
                path: '/accounting/documents'
            },
            {
                id: 'opening-balance',
                title: 'تراز افتتاحیه',
                path: '/accounting/opening-balance'
            },
            {
                id: 'fiscal-year-closing',
                title: 'بستن سال مالی',
                path: '/accounting/fiscal-year-closing'
            },
            {
                id: 'chart-of-accounts',
                title: 'جدول حساب‌ها',
                path: '/accounting/chart-of-accounts'
            },
            {
                id: 'document-consolidation',
                title: 'تجمیع اسناد',
                path: '/accounting/document-consolidation'
            }
        ]
    },
    {
        id: 'other',
        title: 'سایر',
        icon: MoreIcon,
        children: [
            {
                id: 'archive',
                title: 'آرشیو',
                path: '/other/archive'
            },
            {
                id: 'sms-panel',
                title: 'پنل پیامک',
                path: '/other/sms'
            },
            {
                id: 'inquiry',
                title: 'استعلام',
                path: '/other/inquiry'
            },
            {
                id: 'other-receive',
                title: 'دریافت سایر',
                path: '/other/receive'
            },
            {
                id: 'other-receives-list',
                title: 'لیست دریافت‌ها',
                path: '/other/receives'
            },
            {
                id: 'other-payment',
                title: 'پرداخت سایر',
                path: '/other/payment'
            },
            {
                id: 'other-payments-list',
                title: 'لیست پرداخت‌ها',
                path: '/other/payments'
            },
            {
                id: 'currency-exchange',
                title: 'سند تسعیر ارز',
                path: '/other/currency-exchange'
            },
            {
                id: 'persons-balance',
                title: 'سند توازن اشخاص',
                path: '/other/persons-balance'
            },
            {
                id: 'products-balance',
                title: 'سند توازن کالاها',
                path: '/other/products-balance'
            },
            {
                id: 'salary',
                title: 'سند حقوق',
                path: '/other/salary'
            }
        ]
    },
    {
        id: 'reports',
        title: 'گزارش‌ها',
        icon: AssessmentIcon,
        children: [
            {
                id: 'all-reports',
                title: 'تمام گزارش‌ها',
                path: '/reports/all'
            },
            {
                id: 'balance-sheet',
                title: 'ترازنامه',
                path: '/reports/balance-sheet'
            },
            {
                id: 'debtors-creditors',
                title: 'بدهکاران و بستانکاران',
                path: '/reports/debtors-creditors'
            },
            {
                id: 'persons-account',
                title: 'کارت حساب اشخاص',
                path: '/reports/persons-account'
            },
            {
                id: 'products-account',
                title: 'کارت حساب کالا',
                path: '/reports/products-account'
            },
            {
                id: 'sales-by-product',
                title: 'فروش به تفکیک کالا',
                path: '/reports/sales-by-product'
            },
            {
                id: 'project-card',
                title: 'کارت پروژه',
                path: '/reports/project-card'
            }
        ]
    },
    {
        id: 'settings',
        title: 'تنظیمات',
        icon: SettingsIcon,
        children: [
            {
                id: 'projects',
                title: 'پروژه‌ها',
                path: '/settings/projects'
            },
            {
                id: 'business-info',
                title: 'اطلاعات کسب و کار',
                path: '/settings/business'
            },
            {
                id: 'financial-settings',
                title: 'تنظیمات مالی',
                path: '/settings/financial'
            },
            {
                id: 'currency-rates',
                title: 'جدول تبدیل نرخ ارز',
                path: '/settings/currency-rates'
            },
            {
                id: 'users',
                title: 'مدیریت کاربران',
                path: '/settings/users'
            },
            {
                id: 'print-settings',
                title: 'تنظیمات چاپ',
                path: '/settings/print'
            },
            {
                id: 'form-builder',
                title: 'فرم ساز',
                path: '/settings/form-builder'
            },
            {
                id: 'notifications',
                title: 'اعلانات',
                path: '/settings/notifications'
            }
        ]
    }
];