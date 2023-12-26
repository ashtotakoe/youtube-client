import type { MatIconRegistry } from '@angular/material/icon'
import type { DomSanitizer } from '@angular/platform-browser'

export const setCustomSvgIcons = ({
  matIconRegistry,
  domSanitizer,
  customIcons,
}: {
  matIconRegistry: MatIconRegistry
  domSanitizer: DomSanitizer
  customIcons: Array<Record<string, string>>
}): void => {
  customIcons.forEach(({ name, path }) => {
    matIconRegistry.addSvgIcon(name, domSanitizer.bypassSecurityTrustResourceUrl(path))
  })
}
