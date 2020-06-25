import { GENERAL_TERMS as generalTerms } from './generalTerms';
import { DESKTOP_BANNERS as desktopBanners } from './desktop/bannersDesktop';
import { HTML5 as html5 } from './desktop/html5';
import { NATIVE_AD as nativeAd } from './desktop/nativeAd';
import { MOBILE_BANNERS as mobileBanners } from './mobile/bannersMobile';
import { SMS as sms } from './mobile/sms';
import { MMS as mms } from './mobile/mms';
import { MAILING as mailing } from './mailing/mailing';
import { VIDEO_MAILING as videoMailing } from './mailing/videoMailing';
import { REAL_TIME_MAILING as realTimeMailing } from './mailing/realTimeMailing';
import { BEST_PRAKTICES as bestPractices } from './mailing/bestPractices';

export const content = [
  {
    section: 'generalTerms',
    sectionTitle: 'ogólne warunki dostarczania formatów reklamowych',
    sectionContent: [
      { subSection: '', subSectionTitle: '', subSectionContent: generalTerms },
    ],
  },
  {
    section: 'desktop',
    sectionTitle: 'desktop',
    sectionContent: [
      {
        subSection: 'desktopBanners',
        subSectionTitle: 'formaty standardowe',
        subSectionContent: desktopBanners,
      },
      {
        subSection: 'html5',
        subSectionTitle: 'html5',
        subSectionContent: html5,
      },
      {
        subSection: 'nativeAd',
        subSectionTitle: 'reklama natywna',
        subSectionContent: nativeAd,
      },
    ],
  },
  {
    section: 'mobile',
    sectionTitle: 'mobile',
    sectionContent: [
      {
        subSection: 'mobileBanners',
        subSectionTitle: 'formaty standardowe',
        subSectionContent: mobileBanners,
      },
      {
        subSection: 'sms',
        subSectionTitle: 'sms',
        subSectionContent: sms,
      },
      {
        subSection: 'mms',
        subSectionTitle: 'mms',
        subSectionContent: mms,
      },
    ],
  },
  {
    section: 'mailing',
    sectionTitle: 'mailing',
    sectionContent: [
      {
        subSection: 'mailing',
        subSectionTitle: 'e-mailing',
        subSectionContent: mailing,
      },
      {
        subSection: 'videoMailing',
        subSectionTitle: 'video e-mailing',
        subSectionContent: videoMailing,
      },
      {
        subSection: 'realTimeMailing',
        subSectionTitle: 'e-mailing z zegarem lub licznikiem',
        subSectionContent: realTimeMailing,
      },
      {
        subSection: 'bestPractices',
        subSectionTitle: 'dobre praktyki w e-mailingu',
        subSectionContent: bestPractices,
      },
    ],
  },
];

function createSubsectionsArray(subsections, objItem) {
  const dataArray = [];
  subsections.map((item) =>
    dataArray.push({ title: item.subSectionTitle, name: item.subSection }),
  );
  return dataArray;
}

export const sections = content.map((item) => ({
  section: item.sectionTitle,
  name: item.section,
  subsections: createSubsectionsArray(item.sectionContent, 'title'),
}));
